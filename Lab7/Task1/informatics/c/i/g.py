x = int(input())

m = 0
for i in range(2,x + 1):
    if(x % i == 0):
        m = i
        break

print(m)