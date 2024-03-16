a = int(input())
a_str = str(a)
b = 0
for i in a_str[::-1]:
    b = b * 10 + int(i)

print(b)
