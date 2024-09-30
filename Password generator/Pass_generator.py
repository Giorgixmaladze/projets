import random


print("Welcome to the Password generator")

chars = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%?&0123456789"
amount_of_pass = int(input("Enter amount of password👉: "))

pass_len = int(input("Enter lenght of the password👉: "))

for _ in range(amount_of_pass):
    password = ""
    for _ in range(pass_len):
        password += random.choice(chars)

    print("\n", password)