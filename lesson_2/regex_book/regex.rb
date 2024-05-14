text = "cat\ncot\nCATASTROPHE\nWILDCAUGHT\n" +
       "wildcat\n-GET-\nYacht"

p text.scan(/\Ac.t/i) # ["cat"]
p text.scan(/c.t\z/i) # ["cht"]
