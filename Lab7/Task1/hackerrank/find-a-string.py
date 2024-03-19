def count_substring(string, sub_string):
    k = 0
    for i in range(len(string)):
        if string[i : i + len(sub_string)] == sub_string:
            k += 1
    return k

string = input().strip()
sub_string = input().strip()

count = count_substring(string, sub_string)
print(count)