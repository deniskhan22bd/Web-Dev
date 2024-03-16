a = int(input())

b = list(map(int, input().split()))


for i, num in enumerate(b):
    if i % 2 == 0:
        print(num)
    