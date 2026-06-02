from typing import Dict

my_dct: Dict[str, str] = {'PSV': "Eredivisie",
          "Ajax": "Eredivisie",
          "River plate": "Argetina",
          "FC Barcelona": "spain"}



def most_popular_league(clubs_dict: Dict[str, str]) -> str:
      """
      This functions gives the most popular league in the dictionary received as parameter.
      Param: clubs_dict, dictionary containing the club's name as key and the league as value.
      Return: return the name of the league that appears the most in the dictionary
      """
      histogram: Dict[str, int] = calculate_appearances(clubs_dict)
      # TODO: calculate and return the most popular league


def calculate_appearances(clubs_dict: Dict[str, str]) -> Dict[str, int]:
      """
      This function calculates the number of times a league has appeared.
      Param: clubs_dict, dictionary containing the club's name as key and the league as value.
      Return: Dictionary containing the leagues as keys and the number of occurences as values.
      """
      new_dct = {}

      for club_name in clubs_dict:
            league_name = clubs_dict[club_name]

            new_dct[league_name] = new_dct.get(league_name, 0) + 1
      return new_dct

most_popular_league(my_dct)
