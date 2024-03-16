a = int(input())

b = list(map(int, input().split()))

k = 0
for i in range(a - 1):
    if b[i] > 0 and b[i + 1] > 0 or b[i] < 0 and b[i + 1] < 0:
        k += 1

if k != 0:
    print("YES")
else:
    print("NO")