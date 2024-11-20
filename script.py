def isValid( s):
    valid = True
    closingBrackets = {')', ']','}'}
    openingBrackets = {'(':0, '[':0,'{':0}
    counter = 0
    closingOrder = []
    for i in range(len(s)):
        if(s[i] in openingBrackets):
            if(openingBrackets[s[i]] < 0):
                return False
            openingBrackets[s[i]] = openingBrackets[s[i]]+1
            if(s[i] == '('):
                closingOrder.append(')')
            if(s[i] == '['):
                closingOrder.append(']')
            if(s[i] == '{'):
                closingOrder.append('}')
        if(s[i] in closingBrackets):
            print(closingOrder, "And : ", s[i])
            if(len(closingOrder) != 0 and closingOrder.pop() != s[i]):
                return valid
            if(s[i] == ')'):
                openingBrackets['('] = openingBrackets['('] -1
            if(s[i] == ']'):
                openingBrackets['['] = openingBrackets['[']-1
            if(s[i] == '}'):
                openingBrackets['{'] = openingBrackets['{']-1
    for s in openingBrackets:
        if(openingBrackets[s] > 0 or openingBrackets[s] < 0):
            return False
    return valid
s="]"
print(isValid(s))