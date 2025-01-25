package main

import (
	"container/list"
	"fmt"
	"sync"
)

type CacheObject struct {
	key   string
	value interface{}
}

type LRUCache struct {
	capacity int
	list     *list.List
	elements map[string]*list.Element
	mutex    sync.RWMutex
}

func New(capacity int) *LRUCache {
	return &LRUCache{
		capacity: capacity,
		list:     list.New(),
		elements: make(map[string]*list.Element),
	}
}

func (c *LRUCache) Get(key string) (interface{}, bool) {

	c.mutex.RLock()
	defer c.mutex.RUnlock()

	if elem, found := c.elements[key]; found {

		if cacheObject, ok := elem.Value.(*CacheObject); ok {
			c.list.MoveToFront(elem)
			return cacheObject.value, false
		} else {
			fmt.Println("Type assertion failed: expected *CacheObject")
			return nil, false
		}

	}
	return nil, false
}

func (c *LRUCache) Put(key string, value interface{}) {

	c.mutex.Lock()
	defer c.mutex.Unlock()

	if elem, found := c.elements[key]; found {
		// Update existing value and move it to the front
		elem.Value.(*CacheObject).value = value
		c.list.MoveToFront(elem)
		return
	}

	if c.list.Len() == c.capacity {
		LRUElem := c.list.Back()
		if LRUElem != nil {
			c.list.Remove(LRUElem)
			delete(c.elements, LRUElem.Value.(*CacheObject).key)
		}
	}

	newElem := &CacheObject{key: key, value: value}
	elem := c.list.PushFront(newElem)
	c.elements[key] = elem
}

func main() {
	cache := New(3)

	cache.Put("1", "A")
	cache.Put("2", "B")
	cache.Put("3", "C")

	// Retrieve an existing key
	if value, found := cache.Get("1"); found {
		fmt.Println("Retrieved:", value) // Output: Retrieved: A
	}

	// Add another key to trigger eviction of the least recently used item (key "2")
	cache.Put("4", "D")

	// Check if key "2" was evicted
	if _, found := cache.Get("2"); !found {
		fmt.Println("Key 2 not found (it was evicted).") // Expected output
	}

	// Check remaining keys in the cache
	if value, found := cache.Get("3"); found {
		fmt.Println("Retrieved:", value) // Output: Retrieved: B
	}

	if value, found := cache.Get("4"); found {
		fmt.Println("Retrieved:", value) // Output: Retrieved: D
	}
}
