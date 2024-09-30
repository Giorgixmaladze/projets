import random

choice = ("Rock","Paper","Scissors")
running = True
while running:
    player = None
    
    comp = random.choice(choice)
    
    player = input("Enter your choice (Rock ✊,Paper ✋, Scissors ✂): ")
    comp_score = 0
    my_score = 0
    
    while player not in choice:
        player = input("Enter your choice (Rock ✊, Paper ✋,Scissors ✂): ")
    
    print(f"Computer : {comp}")
    print(f"Player : {player}")

    if player == comp:
        print("It's Tie")
    elif (player == "Rock") and (comp == "Paper"):
        print("You lose")
        comp_score += 1
    elif (player == "Paper") and (comp == "Scissors"):
        print("You lose")
        comp_score += 1
    elif (player == "Scissors") and (comp == "Rock"):
        print("You lose")
        comp_score += 1
    else:
        print("You win")
        my_score += 1
    print(f"💻Computer score: {comp_score}")
    print(f"🧑Your score :{my_score}")
    
    if not input("Play again(y/n)?: ").lower() == "y":
        running = False
print("Thanks for playing ♥")





