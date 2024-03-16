def minimum(a, b, c, d : int) -> int:
    return min(a, b, c, d)


a, b, c, d = list(map(int, input().split()))

print(minimum(a, b, c, d))