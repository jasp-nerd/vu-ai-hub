"""
PROBLEM:
Define a Python program that allows you to model a Book. 
Your model must contain at least 3 attributes, and one of them must be the price (without tax).
You must override the constructor and the string representation of the books.
Also, you must implement at least one method that calculates the price of the book, including tax. 
You can assume that the tax on books is 19%.
Please make sure that you create at least 2 objects of type book.
"""

class Book:
      """
      This class represents a book with three properties: name, price, and the type of cover.
      """

      # Other classes might need to have access to the TAX percentage.
      # So it is defined as a class attribute.
      TAX:float = 0.19
      
      def __init__(self, name_p:str, price_p: float, hard_cover: bool) -> None:
            """
            This method initializes the properties of the book
            :param name represents the name of the book.
            :param price represents the price of the book without VAT
            :param hard_cover represents the type of cover. True means hard cover.
            """
            self.name = name_p
            self.price = price_p
            self.hard_cover = hard_cover            
            
      def __str__(self) -> str:
            """
            This method defines the string representation of the Book class.
            """
            cover_type:str = "hard cover" if self.hard_cover else "soft cover"
            return f"The book {self.name} has a {cover_type} and costs €{self.calculate_price()}"
      
      def calculate_price(self) -> float:
            """
            This method calculates the price of the book, including the taxes for books.
            :return float representing the book's price including the taxes. 
            The value is rounded to two decimal points
            """
            return round(self.price * (1 + self.TAX), 2)
      
def main():
      mark_twain = Book("Tom Sawyer", 12.0, True)
      charles_bukowski = Book("The Pleasures of the Damned", 10.0, False)
      print(mark_twain)
      print(charles_bukowski)

      # If you want to only know the percentage of taxes, you can use the code below
      print(f"Book taxes is {Book.TAX * 100}%")

if __name__ == "__main__":
      main()