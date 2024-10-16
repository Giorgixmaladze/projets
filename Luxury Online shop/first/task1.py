def create_phone_number(n):
    st = "(xxx) xxx-xxxx"
    new_st =""

    for i in range(len(n)):
        if len(new_st) == len(st):
                break

        for c in range(len(st)):
            
            if(st[c] == "x"):
                new_st += st[c].replace("x",str(n[i])) 
                i+=1
            else:
                new_st += st[c]
            

    return new_st       

        


    


print(create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
    