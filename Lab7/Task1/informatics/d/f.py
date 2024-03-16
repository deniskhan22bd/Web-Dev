a = int(input())

b = list(map(int, input().split()))

k = 0
for i in range(1, a - 1):
    
    if b[i - 1] < b[i] and b[i] > b[i + 1]:
        k += 1
print(k)