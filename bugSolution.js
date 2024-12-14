```javascript
//Correct usage of $inc operator with $setOnInsert
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{"$inc":{"counter":-1},"$setOnInsert":{"counter":0}});
//This will set counter to 0 if it does not exist and then decrement it by 1
```