document.questions = [
    {
        'question': '' +
            "print 'hello'\n" +
            "",
        'answer': function(num){return 'hello'}
    },
    {
        'question': '' +
            "num = %num%\n" +
            "print num\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "num = 4\n" +
            "num = 8\n" +
            "num = %num%\n" +
            "print num\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "num_a = 2\n" +
            "num_b = %num%\n" +
            "num_a = num_b\n" +
            "print num_a\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "num_a = %num%\n" +
            "num_b = 5\n" +
            "if num_a &gt; num_b:\n" +
            "    print 'greater'\n" +
            "else if num_a &lt; num_b:\n" +
            "    print 'less than'\n" +
            "else if num_a == num_b:\n" +
            "    print 'equal'\n" +
            "",
        'answer': function(num){
            return num > 5 ? 'greater' : (num < 5 ? 'less' : 'equal')
        }
    },
    {
        'question': '' +
            "def add_1(num):\n" +
            "    num_plus = num + 1\n" +
            "    return num_plus\n" +
            "\n" +
            "num_a = %num%\n" +
            "num_b = add_1(num_a)\n" +
            "print num_b\n" +
            "",
        'answer': function(num){return num + 1}
    },
    {
        'question': '' +
            "def add(num_a, num_b):\n" +
            "    result = num_a + num_b\n" +
            "    return result\n" +
            "\n" +
            "num = add(5, %num%)\n" +
            "print num\n" +
            "",
        'answer': function(num){return num + 5}
    },
    {
        'question': '' +
            "def multipy(num_a, num_b):\n" +
            "    result = num_a * num_b\n" +
            "    return result\n" +
            "\n" +
            "num = %num%\n" +
            "while num &lt; 12:\n" +
            "    num = multiply(num, 2)\n" +
            "\n" +
            "print num\n" +
            "",
        'answer': function(num){
            while(num < 12){
                num *= 2;
            }
            return num
        }
    },
    {
        'question': '' +
            "def first_item(lst):\n" +
            "    item = lst[0]\n" +
            "    return item\n" +
            "\n" +
            "a_list = [%num%, 5, 17]\n" +
            "num = first_item(a_list)\n" +
            "print num\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "num = 0\n" +
            "a_list = [3, %num%, 5]\n" +
            "for item in a_list:\n" +
            "    num = num + item\n" +
            "\n" +
            "print num\n" +
            "",
        'answer': function(num){return num + 8}
    },
    {
        'question': '' +
            "a_dict = {'zero'=6, 'one'=%num%, 'two'=3}\n" +
            "num = a_dict['one']\n" +
            "print num\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "a_list = [%num%, 4, 1]\n" +
            "num = a_list[0] + a_list[1]\n" +
            "print num\n" +
            "",
        'answer': function(num){return num + 4}
    },
    {
        'question': '' +
            "def mystery_function(num_a, num_b):\n" +
            "    if num_b == 0:\n" +
            "        return num_a\n" +
            "    else:\n" +
            "        num = add(num_a + 1, num_b - 1)\n" +
            "        return num\n" +
            "\n" +
            "num = mystery_function(%num%, 2)\n" +
            "print num\n" +
            "",
        'answer': function(num){return num + 2}
    },
    {
        'question': '' +
            "def multiply(a, b):\n" +
            "    return a * b\n" +
            "\n" +
            "def apply_funct(funct):\n" +
            "    num_a = %num%\n" +
            "    num_b = 3\n" +
            "    return funct(num_a, num_b)\n" +
            "\n" +
            "num = apply_funct(multiply)\n" +
            "print num\n" +
            "",
        'answer': function(num){return num * 3}
    },
    {
        'question': '' +
            "class Office(object):\n" +
            "    num_computers = 4\n" +
            "    num_workers = %num%\n" +
            "\n" +
            "my_office = Office()\n" +
            "print my_office.num_workers\n" +
            "",
        'answer': function(num){return num}
    },
    {
        'question': '' +
            "class Office(object):\n" +
            "    num_computers = 4\n" +
            "    num_workers = %num%\n" +
            "    def happy_office(self):\n" +
            "        if self.num_workers &gt; self.num_computers:\n" +
            "            return 'not happy'\n" +
            "        else:\n" +
            "            return 'happy'\n" +
            "\n" +
            "my_office = Office()\n" +
            "print my_office.happy_office()\n" +
            "",
        'answer': function(num){return num > 4 ? 'not happy' : 'happy'}
    },
    {
        'question': '' +
            "class Office(object):\n" +
            "    def __init__(self, num_computers, num_workers):\n" +
            "        self.num_computers = num_computers\n" +
            "        self.num_workers = num_workers\n" +
            "\n" +
            "my_office = Office(4, %num%)\n" +
            "his_office = Office(7, my_office.num_workers + 1)\n" +
            "print his_office.num_workers\n" +
            "",
        'answer': function(num){return num + 1}
    },
    {
        'question': '' +
            "class Office(object):\n" +
            "    def __init__(self, num_computers):\n" +
            "        self.num_computers = num_computers\n" +
            "\n" +
            "    def steal_their_computers(self, other_office):\n" +
            "        self.num_computers = self.num_computers + other_office.num_computers\n" +
            "        other_office.num_computers = 0\n" +
            "\n" +
            "my_office = office(%num%)\n" +
            "his_office = office(3)\n" +
            "my_office.steal_their_computers(his_office)\n" +
            "print my_office.num_computers\n" +
            "",
        'answer': function(num){return num + 3}
    }
]
