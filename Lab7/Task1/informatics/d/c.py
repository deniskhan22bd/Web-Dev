a = int(input())

b = list(map(int, input().split()))

k = 0
for i, num in enumerate(b):
    if num > 0:
        k += 1
    
print(k)