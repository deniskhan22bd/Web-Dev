a = int(input())

b = list(map(int, input().split()))


for i, num in enumerate(b):
    if num % 2 == 0:
        print(num)
    