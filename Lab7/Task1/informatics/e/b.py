def power(a, n) -> float:
    return a ** n

a, b = list(map(float, input().split()))

print(power(a, b))