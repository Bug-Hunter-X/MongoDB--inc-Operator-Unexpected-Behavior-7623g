# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon error related to the MongoDB `$inc` operator. The `$inc` operator is used to increment or decrement a numerical field in a MongoDB document. However, when used without considering the case when the field doesn't exist it leads to unexpected behaviour.

## Bug Description
The bug occurs when using `$inc` to decrement a counter which might not exist. If the field does not exist, the operation still runs, but unexpectedly decrements it from zero leading to negative values. 

## Solution
Using the `$setOnInsert` operator along with `$inc` ensures that if the field does not exist, it is first initialized to a default value (e.g., 0) before the increment/decrement operation is performed. This prevents unexpected negative values and ensures data consistency.
