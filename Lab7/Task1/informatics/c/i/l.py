a = input()

num = 0
l = len(a)
for i in a:
    if i == '1':
        num += 2 ** (l - 1)
    l -= 1

    
print(num)