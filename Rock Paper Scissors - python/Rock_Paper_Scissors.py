import random

choice = ("Rock","Paper","Scissors")
running = True
while running:
    player = None
    
    comp = random.choice(choice)

    player = input("Enter your choice (Rock, Paper, Scissors): ")

    
    while player not in choice:
        player = input("Enter your choice (Rock, Paper, Scissors): ")
    
    print(f"Computer : {comp}")
    print(f"Player : {player}")

    if player == comp:
        print("It's Tie")
    elif player == "Rock" and comp == "Paper":
        print("You lose")
    elif player == "Paper" and comp == "Scissors":
        print("You lose")
    elif player == "Scissors" and comp == "Rock":
        print("You lose")
    else:
        print("You win")

    
    if not input("Play again(y/n)?: ").lower() == "y":
        running = False
print("Thanks for playing <3")





