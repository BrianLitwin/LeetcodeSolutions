def checkPalindrome(inputString):
    length = len(inputString) // 2
    print(length)
    for i in range(length):
        if inputString[i] != inputString[-i - 1]:
            return False

    return True 
