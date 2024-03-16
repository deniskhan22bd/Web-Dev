a = int(input())

b = list(map(int, input().split()))

k = 0
for i in range(a - 1):
    if b[i] < b[i + 1]:
        k += 1

print(k)