from math import sqrt

a = int(input())
k = 0
for i in range(1, int(sqrt(a) + 1)):
    if(a % i == 0):
        k += 1
        if i * i != a:
                k += 1

print(k)