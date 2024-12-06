# Unexpected Zero Handling in JavaScript Function

This example demonstrates a common JavaScript error involving the handling of zero values and the use of loose comparison (==).  The function `foo` intends to return 0 if either `a` or `b` is 0, however, due to a flawed implementation, it throws an error when dividing by zero.

The solution demonstrates a more robust method to check for zero values and prevent the error.