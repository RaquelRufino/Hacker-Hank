n = input()
s = []

for i in range(n):

    query = map(int, raw_input().split())

    if query[0] == 1:
        if len(s) == 0:
            s.append(query[1])
        else:
            s.append(query[1] if query[1] > s[-1] else s[-1])
        
    
    elif query[0] == 2:
        s.pop()
        
    else:
        print (s[-1])

