/**
 * Introduction to Python Programming Summary — inline markdown content.
 * Compiled from lecture slides and practice exams for the VU Introduction to Python Programming course.
 */
export const introPythonSummary = `
# Introduction to Python Programming -- Comprehensive Summary

This summary covers all major topics from the VU Introduction to Python Programming course, including variables, data types, control flow, functions, data structures, file I/O, error handling, object-oriented programming, testing, and coding style.

---

## 1. Variables, Data Types, and Operators

### 1.1 What Are Variables?

Variables allow you to **store and access data** and **communicate the meaning** of your program. Instead of using raw values everywhere, variables give names to data so your code is readable and maintainable.

    # Basic variable assignments
    name = "Alice"        # str
    age = 21              # int
    gpa = 3.85            # float
    enrolled = True       # bool

### 1.2 Core Data Types

| Type    | Description                        | Example            |
|---------|------------------------------------|--------------------|
| \`int\`   | Whole numbers                      | \`7\`, \`-3\`, \`0\`      |
| \`float\` | Decimal numbers                    | \`7.5\`, \`-0.01\`     |
| \`str\`   | Text (sequence of characters)      | \`"Hello"\`, \`'Hi'\`  |
| \`bool\`  | Boolean (True or False)            | \`True\`, \`False\`     |
| \`None\`  | Represents the absence of a value  | \`None\`              |

You can check a variable's type with the built-in \`type()\` function:

    x = 42
    print(type(x))  # <class 'int'>

### 1.3 Type Conversion

    int("42")       # 42 (string to int)
    float("3.14")   # 3.14 (string to float)
    str(100)        # "100" (int to string)
    bool(0)         # False (0 is falsy)
    bool(1)         # True (nonzero is truthy)

### 1.4 Arithmetic Operators

| Operator | Description          | Example        |
|----------|----------------------|----------------|
| \`+\`      | Addition             | \`5 + 3 = 8\`   |
| \`-\`      | Subtraction          | \`5 - 3 = 2\`   |
| \`*\`      | Multiplication       | \`5 * 3 = 15\`  |
| \`/\`      | Division (float)     | \`7 / 2 = 3.5\` |
| \`//\`     | Floor division       | \`7 // 2 = 3\`  |
| \`%\`      | Modulus (remainder)  | \`7 % 2 = 1\`   |
| \`**\`     | Exponentiation       | \`2 ** 3 = 8\`  |

### 1.5 Comparison and Logical Operators

**Comparison operators** return \`bool\` values:

    ==    # equal to
    !=    # not equal to
    <     # less than
    >     # greater than
    <=    # less than or equal to
    >=    # greater than or equal to

**Logical operators** combine boolean expressions:

    and   # True if both operands are True
    or    # True if at least one operand is True
    not   # Negates the boolean value

### 1.6 Assignment Operators

    x = 10
    x += 5    # x = x + 5  -> 15
    x -= 3    # x = x - 3  -> 12
    x *= 2    # x = x * 2  -> 24
    x /= 4    # x = x / 4  -> 6.0

### 1.7 Common Pitfalls with Variables

- **Bad naming**: Use descriptive names. \`x\` and \`y\` are fine for coordinates, but not for representing a person's name. Prefer \`for name in names:\` over \`for x in names:\`.
- **Overwriting variables**: Be careful when reassigning inside loops. A common bug:

      names = ["Person I'm looking for", "This other dude"]
      for name in names:
          if name == "Person I'm looking for":
              found = True
          else:
              found = False  # This overwrites the True from the previous iteration!
      print(found)  # False -- the bug!

  Fix: set \`found = False\` before the loop and only set to \`True\` (never back to \`False\`), or use \`break\`.

- **Scope issues**: A variable defined inside a function is local to that function.

      my_variable = 5

      def my_function():
          my_variable = 6  # Different scope -- does NOT change the outer variable

      my_function()
      print(my_variable)  # Still 5

---

## 2. Strings and String Methods

### 2.1 Creating Strings

    single = 'Hello'
    double = "Hello"
    multi_line = """This is
    a multi-line string"""

### 2.2 String Indexing and Slicing

Strings are sequences of characters, indexed starting at 0. Negative indices count from the end.

    s = "GEEKSFORGEEKS"
    s[0]     # 'G'
    s[-1]    # 'S'
    s[4:9]   # 'SFORG'
    s[::-1]  # 'SKEEGROFSKEEG' (reversed)

General slicing syntax: \`s[start:end:step]\`

### 2.3 Common String Methods

| Method                | Description                                     |
|-----------------------|-------------------------------------------------|
| \`s.upper()\`           | Returns uppercase version                       |
| \`s.lower()\`           | Returns lowercase version                       |
| \`s.capitalize()\`      | Capitalizes first character                     |
| \`s.strip()\`           | Removes leading/trailing whitespace             |
| \`s.split(sep)\`        | Splits string into list by separator            |
| \`s.join(iterable)\`    | Joins iterable elements with \`s\` as separator   |
| \`s.replace(old, new)\` | Replaces occurrences of \`old\` with \`new\`         |
| \`s.find(sub)\`         | Returns index of first occurrence, or -1        |
| \`s.startswith(sub)\`   | Returns True if string starts with \`sub\`        |
| \`s.endswith(sub)\`     | Returns True if string ends with \`sub\`          |
| \`s.isdigit()\`         | Returns True if all characters are digits       |

**Important**: Strings are **immutable**. Methods return new strings; they do not modify the original.

    a = "a crazy string  "
    b = a.replace(' ', '')    # "acrazystring"
    c = a.capitalize()        # "A crazy string  "
    print(a)                  # "a crazy string  " (unchanged)

### 2.4 f-Strings (Formatted String Literals)

    name = "Fast"
    position = 400
    print(f"{name} is at {position}")  # "Fast is at 400"

f-Strings allow you to embed expressions directly inside string literals using curly braces.

### 2.5 String Membership

    "or" in "Hello World"   # True
    "xyz" in "Hello World"  # False

---

## 3. Control Flow

### 3.1 Conditional Statements (if / elif / else)

Conditionals allow you to **branch execution based on conditions**.

    if 3 > 4:
        print("Impossible!")
    elif 1 + 3 < 12:
        pass  # Do nothing
    else:
        print("Something")

**Key rules**:
- Only one branch executes in an if/elif/else chain.
- \`elif\` and \`else\` are optional.
- You can have multiple \`elif\` blocks.
- Use \`pass\` as a placeholder when you do not want to do anything.

### 3.2 Conditional Pitfalls

**Repeated \`if\` statements vs. \`elif\`**: Using multiple \`if\` statements means each condition is checked independently. Using \`elif\` means only the first matching branch runs.

    # Bug: the else belongs to the SECOND if, not the first
    if True:
        print(1)
    if False:  # This starts a NEW if-else block
        print(2)
    else:
        print(3)  # This WILL be printed!

    # Correct: use elif
    if True:
        print(1)
    elif False:
        print(2)
    else:
        print(3)  # This will NOT be printed

### 3.3 For Loops

\`for\` loops iterate over a sequence (list, string, range, etc.):

    for i in range(5):
        print(i)  # Prints 0, 1, 2, 3, 4

    for char in "hello":
        print(char)  # Prints each character

    for name in ["Alice", "Bob", "Charlie"]:
        print(name)

**\`range()\` function**:

    range(5)        # 0, 1, 2, 3, 4
    range(2, 8)     # 2, 3, 4, 5, 6, 7
    range(0, 10, 2) # 0, 2, 4, 6, 8

### 3.4 While Loops

\`while\` loops repeat as long as a condition is \`True\`:

    clock = 0
    while clock < 3:
        print(f"Tick {clock}")
        clock += 1

**Warning**: Forgetting to update the loop variable leads to an infinite loop.

### 3.5 Loop Control Statements

    break       # Exit the loop immediately
    continue    # Skip to the next iteration

    for i in range(10):
        if i == 5:
            break       # Stops the loop at i = 5
        if i % 2 == 0:
            continue    # Skips even numbers
        print(i)        # Prints 1, 3

### 3.6 Nested Loops

    for i in range(3):
        for j in range(3):
            print(f"({i}, {j})")

---

## 4. Functions

### 4.1 Defining and Calling Functions

Functions encapsulate reusable blocks of code.

    def greet(name):
        """Return a greeting message."""
        return f"Hello, {name}!"

    message = greet("Alice")
    print(message)  # "Hello, Alice!"

### 4.2 Parameters and Arguments

    # Positional arguments
    def add(a, b):
        return a + b

    # Default parameter values
    def greet(name, greeting="Hello"):
        return f"{greeting}, {name}!"

    greet("Alice")             # "Hello, Alice!"
    greet("Alice", "Hi")       # "Hi, Alice!"

    # Keyword arguments
    greet(greeting="Hey", name="Bob")  # "Hey, Bob!"

### 4.3 Return Values

- A function without a \`return\` statement returns \`None\`.
- \`return\` immediately exits the function.
- You can return multiple values using tuples:

      def min_max(numbers):
          return min(numbers), max(numbers)

      lo, hi = min_max([3, 1, 4, 1, 5])
      print(lo, hi)  # 1 5

### 4.4 Scope (Local vs. Global)

Variables created inside a function are **local** -- they do not affect variables outside:

    x = 10

    def change_x():
        x = 20  # This is a LOCAL variable, different from the global x

    change_x()
    print(x)  # 10 (unchanged)

To modify a global variable from within a function, use the \`global\` keyword (generally discouraged):

    x = 10

    def change_x():
        global x
        x = 20

    change_x()
    print(x)  # 20

### 4.5 The \`if __name__ == "__main__":\` Pattern

    def main():
        print("This runs only when the script is executed directly")

    if __name__ == "__main__":
        main()

This pattern prevents code from running when the module is imported by another script.

---

## 5. Lists, Tuples, and List Comprehensions

### 5.1 Lists

Lists are **ordered**, **mutable** collections that allow duplicate members.

    fruits = ["apple", "banana", "cherry"]
    numbers = [1, 2, 3, 4, 5]
    mixed = [1, "hello", 3.14, True]
    empty = []

**Accessing elements**:

    fruits[0]     # "apple"
    fruits[-1]    # "cherry"
    fruits[1:3]   # ["banana", "cherry"]

**Common list methods**:

| Method               | Description                                |
|----------------------|--------------------------------------------|
| \`lst.append(x)\`      | Add \`x\` to the end                         |
| \`lst.insert(i, x)\`   | Insert \`x\` at index \`i\`                     |
| \`lst.remove(x)\`      | Remove first occurrence of \`x\`              |
| \`lst.pop(i)\`         | Remove and return element at index \`i\`      |
| \`lst.sort()\`         | Sort the list in place                     |
| \`lst.reverse()\`      | Reverse the list in place                  |
| \`lst.index(x)\`       | Return index of first occurrence of \`x\`    |
| \`lst.count(x)\`       | Count occurrences of \`x\`                   |
| \`len(lst)\`           | Return the number of elements              |
| \`x in lst\`           | Check membership                           |

**Lists are mutable**:

    fruits = ["apple", "banana"]
    fruits[0] = "avocado"
    print(fruits)  # ["avocado", "banana"]

### 5.2 Tuples

Tuples are **ordered**, **immutable** collections that allow duplicate values. Entries are separated by commas, usually surrounded by round brackets.

    empty_tuple = ()
    single_value = ('Thomas', )    # Note the trailing comma
    two_values = ('Thomas', 'Smith')

**Unpacking tuples**:

    time = (23, 45, 0)
    hour, minute, second = time

**Swapping variables** using tuples:

    a, b = b, a

**Tuple methods** (only two, since tuples are immutable):

| Method      | Description                                                      |
|-------------|------------------------------------------------------------------|
| \`t.count(x)\` | Returns the number of times \`x\` occurs in the tuple              |
| \`t.index(x)\` | Returns the index of the first occurrence of \`x\`                 |

**Slicing** works the same as with strings and lists: \`t[start:end:step]\`

### 5.3 List Comprehensions

List comprehensions create lists concisely from existing iterables.

**Basic syntax**:

    new_list = [expression for item in iterable]
    new_list = [expression for item in iterable if condition]

**Examples**:

    # Transforming: create a list of squares
    squares = [x**2 for x in range(5)]
    # [0, 1, 4, 9, 16]

    # Transforming: uppercase names
    names = ["Alice", "Bob", "Charlie"]
    uppercase_names = [name.upper() for name in names]
    # ["ALICE", "BOB", "CHARLIE"]

    # Filtering: keep only positive amounts
    amounts = [10, -7, 8, 19, -2]
    positive_amounts = [amount for amount in amounts if amount > 0]
    # [10, 8, 19]

**Tip**: Read comprehensions backwards -- the \`for\` clause first, then the \`if\` condition, then the expression.

The equivalent loop form:

    # This comprehension:
    squares = [x**2 for x in range(5)]

    # Is equivalent to:
    squares = []
    for x in range(5):
        squares.append(x**2)

---

## 6. Dictionaries and Sets

### 6.1 Dictionaries

Dictionaries are **ordered** (Python 3.7+), **mutable** collections that map **keys** to **values**. Keys must be unique.

    person = {
        "first_name": "John",
        "last_name": "Doe",
        "nationality": "Canada",
        "birth_year": 1980
    }

**Accessing entries**:

    person["first_name"]          # "John"
    person.get("first_name")      # "John"
    person.get("middle_name")     # None (no KeyError)
    person["middle_name"]         # KeyError!

**Modifying dictionaries**:

    person["email"] = "john@example.com"   # Add new key-value pair
    person["birth_year"] = 1981            # Update existing value
    del person["nationality"]              # Delete a key

**Iterating over dictionaries**:

    # Iterating over keys (default)
    for key in person:
        print(key)

    # Iterating over key-value pairs
    for key, value in person.items():
        print(f"{key}: {value}")

    # Iterating over values only
    for value in person.values():
        print(value)

**Useful dictionary methods**:

| Method                  | Description                                         |
|-------------------------|-----------------------------------------------------|
| \`d.keys()\`              | Returns all keys                                    |
| \`d.values()\`            | Returns all values                                  |
| \`d.items()\`             | Returns all key-value pairs as tuples               |
| \`d.get(key, default)\`   | Returns value for \`key\`, or \`default\` if not found  |
| \`d.setdefault(key, val)\`| Returns value if key exists; otherwise sets it       |
| \`d.update(other)\`       | Merges another dictionary into \`d\`                  |
| \`d.pop(key)\`            | Removes and returns value for \`key\`                 |

### 6.2 Nested Dictionaries

    myfamily = {
        "child1": {"name": "Emil", "year": 2004},
        "child2": {"name": "Tobias", "year": 2007},
        "child3": {"name": "Linus", "year": 2011}
    }

    # Access nested value
    print(myfamily["child2"]["name"])  # "Tobias"

    # Loop through nested dictionaries
    for x, obj in myfamily.items():
        print(x)
        for y in obj:
            print(f"  {y}: {obj[y]}")

### 6.3 Sets

Sets are **unordered** collections of **unique** elements.

    my_set = {1, 2, 3, 4, 5}
    empty_set = set()  # NOT {} -- that creates an empty dict

    my_set.add(6)
    my_set.remove(3)     # Raises KeyError if not found
    my_set.discard(99)   # No error if not found

**Set operations**:

    a = {1, 2, 3}
    b = {2, 3, 4}

    a | b    # Union: {1, 2, 3, 4}
    a & b    # Intersection: {2, 3}
    a - b    # Difference: {1}
    a ^ b    # Symmetric difference: {1, 4}

---

## 7. File I/O

### 7.1 File Modes

| Mode | Description                     |
|------|---------------------------------|
| \`"r"\` | Reading (default)               |
| \`"w"\` | Writing (overwrites the file)   |
| \`"a"\` | Appending                       |
| \`"b"\` | Binary mode (combine: \`"rb"\`)   |
| \`"t"\` | Text mode (default, combine: \`"rt"\`) |

### 7.2 Writing to a File

    file = open("message.txt", "w", encoding="utf-8")
    file.write("hello world\\n")
    file.write("end\\n")
    file.close()

### 7.3 Reading from a File

    file = open("message.txt", encoding="utf-8")
    content = file.read()
    file.close()
    print(content)

### 7.4 Using \`with\` Statement (Recommended)

The \`with\` statement automatically closes the file when the block exits:

    # Reading entire file
    with open("todos.txt", encoding="utf-8") as file_obj:
        content = file_obj.read()

    # Reading line by line
    with open("myfile.txt", encoding="utf-8") as file:
        for line in file:
            print(line)

### 7.5 File Object Methods

| Method / Attribute | Description                              |
|--------------------|------------------------------------------|
| \`.read()\`          | Read the entire file as a string         |
| \`.read(n)\`         | Read the next \`n\` bytes/characters       |
| \`.readline()\`      | Read the next line                       |
| \`.readlines()\`     | Read all lines into a list               |
| \`.write(s)\`        | Write string \`s\` to the file             |
| \`.close()\`         | Close the file                           |
| \`.mode\`            | The mode the file was opened in          |

### 7.6 Working with CSV Files

    import csv

    with open("data.csv", "r") as f:
        reader = csv.reader(f)
        for row in reader:
            print(row)  # Each row is a list of strings

---

## 8. Error Handling (try / except)

### 8.1 Common Exception Types

| Exception              | Cause                                          |
|------------------------|------------------------------------------------|
| \`AttributeError\`       | Accessing a nonexistent attribute              |
| \`IndexError\`           | List index out of range                        |
| \`KeyError\`             | Dictionary key not found                       |
| \`NameError\`            | Using an undefined variable                    |
| \`TypeError\`            | Operation on incompatible types                |
| \`ValueError\`           | Correct type but inappropriate value           |
| \`IOError\`              | File-related error                             |
| \`ZeroDivisionError\`    | Division by zero                               |
| \`FileNotFoundError\`    | File does not exist                            |

### 8.2 Basic try/except

    age_str = input("Enter your age: ")
    try:
        age = int(age_str)
    except ValueError:
        print("Could not parse input as number")

### 8.3 Catching the Exception Object

    try:
        age = int(age_str)
    except ValueError as e:
        print("Could not parse input as number")
        print(e)          # The error message
        print(e.args)     # Tuple of arguments

### 8.4 Multiple except Clauses

    try:
        result = int(input("Enter a number: ")) / int(input("Divide by: "))
    except ValueError:
        print("Please enter valid integers")
    except ZeroDivisionError:
        print("Cannot divide by zero")

### 8.5 else and finally

    try:
        f = open("data.txt")
    except FileNotFoundError:
        print("File not found!")
    else:
        content = f.read()  # Runs only if no exception
        f.close()
    finally:
        print("This always runs")  # Cleanup code

### 8.6 Raising Exceptions

    def set_age(age):
        if age < 0:
            raise ValueError("Age cannot be negative")
        return age

### 8.7 LBYL vs. EAFP

Two coding philosophies for error handling:

- **LBYL** (Look Before You Leap): Check conditions before performing an operation.

      if key in my_dict:
          value = my_dict[key]

- **EAFP** (Easier to Ask Forgiveness than Permission): Try the operation and handle exceptions. This is the **Pythonic** approach.

      try:
          value = my_dict[key]
      except KeyError:
          value = default_value

---

## 9. Object-Oriented Programming (OOP)

### 9.1 What Are Classes and Objects?

A **class** is a blueprint for creating objects. An **object** is an instance of a class that has its own data (attributes) and behavior (methods).

    class Dog:
        def __init__(self, name, breed):
            self.name = name      # Instance attribute
            self.breed = breed

        def bark(self):
            return f"{self.name} says Woof!"

    my_dog = Dog("Rex", "Labrador")
    print(my_dog.bark())  # "Rex says Woof!"

### 9.2 The \`__init__\` Method

The \`__init__\` method is the **constructor** -- it is called automatically when you create a new instance. The first parameter is always \`self\`, which refers to the instance being created.

    class Jar:
        def __init__(self, capacity):
            if not isinstance(capacity, int) or capacity < 0:
                raise ValueError("Capacity must be a non-negative integer")
            self._capacity = capacity
            self._size = 0

### 9.3 Special (Dunder) Methods

| Method           | Purpose                                  |
|------------------|------------------------------------------|
| \`__init__\`       | Constructor (initialize object)          |
| \`__str__\`        | Human-readable string representation     |
| \`__repr__\`       | Developer-friendly string representation |
| \`__len__\`        | Define behavior for \`len(obj)\`           |
| \`__eq__\`         | Define behavior for \`==\`                 |

    class Jar:
        def __init__(self, capacity):
            self._capacity = capacity
            self._size = 0

        def __str__(self):
            return "C" * self._size  # e.g., "CCC" for 3 cookies

        def deposit(self, n):
            if self._size + n > self._capacity:
                raise ValueError("Exceeds capacity")
            self._size += n

        def withdraw(self, n):
            if n > self._size:
                raise ValueError("Not enough cookies")
            self._size -= n

        @property
        def capacity(self):
            return self._capacity

        @property
        def size(self):
            return self._size

### 9.4 Properties

Use the \`@property\` decorator to create read-only attributes with getter-like access:

    class Circle:
        def __init__(self, radius):
            self._radius = radius

        @property
        def radius(self):
            return self._radius

        @property
        def area(self):
            import math
            return math.pi * self._radius ** 2

    c = Circle(5)
    print(c.area)    # 78.539... (accessed like an attribute, no parentheses)

### 9.5 Inheritance

Inheritance lets a child class **inherit** attributes and methods from a parent class.

    class Animal:
        def __init__(self, name):
            self.name = name

        def speak(self):
            return f"{self.name} makes a sound"

    class Dog(Animal):
        def speak(self):
            return f"{self.name} says Woof!"

    class Cat(Animal):
        def speak(self):
            return f"{self.name} says Meow!"

    dog = Dog("Rex")
    cat = Cat("Whiskers")
    print(dog.speak())  # "Rex says Woof!"
    print(cat.speak())  # "Whiskers says Meow!"

Use \`super()\` to call the parent class's method:

    class Puppy(Dog):
        def __init__(self, name, toy):
            super().__init__(name)
            self.toy = toy

### 9.6 Polymorphism

Polymorphism means different classes can define the **same method name** with different behavior. Code that calls the method does not need to know the exact class:

    animals = [Dog("Rex"), Cat("Whiskers")]
    for animal in animals:
        print(animal.speak())  # Each calls its own version of speak()

### 9.7 Class Attributes vs. Instance Attributes

    class Student:
        university = "VU Amsterdam"  # Class attribute (shared by all instances)

        def __init__(self, name):
            self.name = name         # Instance attribute (unique per instance)

    s1 = Student("Alice")
    s2 = Student("Bob")
    print(s1.university)  # "VU Amsterdam"
    print(s2.university)  # "VU Amsterdam"

---

## 10. Testing

### 10.1 Why Test?

Testing ensures your code works correctly and helps you catch bugs early. Writing tests also helps you think about edge cases and expected behavior before writing the implementation.

### 10.2 The \`assert\` Statement

\`assert\` checks a condition and raises \`AssertionError\` if it is \`False\`:

    assert 2 + 2 == 4         # Passes (no error)
    assert 2 + 2 == 5         # AssertionError!

    # With a custom error message
    assert len("hello") == 5, "String length should be 5"

### 10.3 pytest

**pytest** is the standard testing framework used in this course. Install it with:

    pip install pytest

**Writing tests**: Create a file with a name starting with \`test_\` and write functions starting with \`test_\`:

    # test_math.py
    def test_addition():
        assert 1 + 1 == 2

    def test_subtraction():
        assert 5 - 3 == 2

**Running tests**:

    pytest test_math.py

### 10.4 Testing for Exceptions

Use \`pytest.raises\` to verify that a function raises the expected exception:

    import pytest

    def test_divide_by_zero():
        with pytest.raises(ZeroDivisionError):
            result = 1 / 0

    def test_invalid_conversion():
        with pytest.raises(ValueError):
            int("not_a_number")

### 10.5 Practical Example: Testing a Fuel Gauge

Given functions \`convert(fraction)\` and \`gauge(percentage)\`:

    # fuel.py
    def convert(fraction):
        """Convert a fraction string 'X/Y' to a percentage (int)."""
        x, y = fraction.split("/")
        x, y = int(x), int(y)
        if x > y:
            raise ValueError
        if y == 0:
            raise ZeroDivisionError
        return round(x / y * 100)

    def gauge(percentage):
        """Return 'E', 'F', or 'Z%' based on the percentage."""
        if percentage <= 1:
            return "E"
        elif percentage >= 99:
            return "F"
        else:
            return f"{percentage}%"

    # test_fuel.py
    import pytest
    from fuel import convert, gauge

    def test_convert_normal():
        assert convert("1/2") == 50

    def test_convert_full():
        assert convert("4/4") == 100

    def test_convert_invalid():
        with pytest.raises(ValueError):
            convert("5/4")

    def test_gauge_empty():
        assert gauge(0) == "E"

    def test_gauge_full():
        assert gauge(100) == "F"

    def test_gauge_middle():
        assert gauge(50) == "50%"

### 10.6 Test Naming Conventions

- Test files: \`test_<module>.py\` (e.g., \`test_fuel.py\`)
- Test functions: \`test_<description>()\` (e.g., \`test_convert_normal()\`)
- pytest automatically discovers and runs all files and functions matching these patterns.

---

## 11. Coding Style (PEP 8)

### 11.1 Key PEP 8 Guidelines

- **Indentation**: Use **4 spaces** per indentation level (never tabs).
- **Line length**: Limit lines to **79 characters** (docstrings/comments to 72).
- **Blank lines**: Two blank lines before top-level functions/classes; one blank line between methods.
- **Imports**: Place at the top of the file, one per line.

      # Good
      import os
      import sys

      # Bad
      import os, sys

- **Naming conventions**:
  - Variables and functions: \`snake_case\` (e.g., \`my_variable\`, \`calculate_total\`)
  - Classes: \`PascalCase\` (e.g., \`MyClass\`, \`CookieJar\`)
  - Constants: \`UPPER_SNAKE_CASE\` (e.g., \`MAX_SIZE\`, \`PI\`)

- **Spaces around operators**:

      # Good
      x = 5
      y = x + 3

      # Bad
      x=5
      y=x+3

- **No trailing whitespace** at the end of lines.

### 11.2 Docstrings

Use docstrings to document functions, classes, and modules:

    def calculate_area(radius):
        """Calculate the area of a circle given its radius.

        Args:
            radius: The radius of the circle (must be non-negative).

        Returns:
            The area as a float.

        Raises:
            ValueError: If radius is negative.
        """
        if radius < 0:
            raise ValueError("Radius cannot be negative")
        import math
        return math.pi * radius ** 2

### 11.3 Comments

    # This is a single-line comment

    x = 42  # This is an inline comment (use sparingly)

    # Avoid obvious comments like:
    x = x + 1  # Increment x by 1  (BAD -- adds no value)

---

## 12. Quick Reference: Python Collection Types

| Collection   | Ordered | Mutable | Duplicates | Syntax              |
|-------------|---------|---------|------------|---------------------|
| **List**     | Yes     | Yes     | Yes        | \`[1, 2, 3]\`         |
| **Tuple**    | Yes     | No      | Yes        | \`(1, 2, 3)\`         |
| **Dictionary** | Yes (3.7+) | Yes | Keys: No | \`{"a": 1, "b": 2}\`  |
| **Set**      | No      | Yes     | No         | \`{1, 2, 3}\`         |

---

## 13. Common Exam Tips

Based on the course recap and exam preparation materials:

1. **Read error messages carefully** -- they tell you the file, line number, and type of error.
2. **Use \`print()\` for debugging** -- it is your best friend when tracing through code.
3. **Make a battle plan** before coding -- break the problem down into smaller parts.
4. **Trace through code by hand** -- for exam questions, step through each line and track variable values.
5. **Watch out for mutable default arguments** -- never use a mutable object (like a list) as a default parameter.
6. **Remember that strings are immutable** -- string methods return new strings.
7. **Understand scope** -- local variables inside functions do not affect global variables unless you use \`global\`.
8. **Test edge cases** -- empty inputs, zero, negative numbers, single-element collections.
9. **Use the \`with\` statement** for file operations to ensure files are properly closed.
10. **Practice OOP** -- know how to define classes with \`__init__\`, \`__str__\`, properties, and inheritance.
`;
