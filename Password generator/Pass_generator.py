import random


print("Welcome to the Password generator")
running = True
chars = "abcdefghijklmnopqrstuvwzyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%?&0123456789"
amount_of_pass = int(input("Enter amount of password👉: "))

pass_len = int(input("Enter lenght of the password👉: "))

while running:
    for _ in range(amount_of_pass):
        password = ""
        for _ in range(pass_len):
            password += random.choice(chars)
        print("\n", password)
    if not input("Want another password for you (y/n)?").lower() == "y":
        running = False


print("Thanks for using password generator ♥")