a = int(input())

i = 0

num = 0

while num < a:
    num = 2 ** i
    i += 1

if num == a:
    print("YES")
else:
    print("NO")