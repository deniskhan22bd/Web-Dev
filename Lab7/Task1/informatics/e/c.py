def xor(x, y : bool) -> bool:
    return x ^ y


a, b= list(map(int, input().split()))

print(xor(a, b))
