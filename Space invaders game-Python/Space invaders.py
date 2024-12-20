
import pygame
import random


#initialize pygame
pygame.init()

#create the screen
screen = pygame.display.set_mode((800,600))


#Background
background = pygame.image.load("background.jpeg")


#Title and icon
pygame.display.set_caption("Space invaders")
icon = pygame.image.load("space.png")
pygame.display.set_icon(icon)


#player
player_img = pygame.image.load("10969105451642010534-128.png")
player_x = 350
player_y = 480
player_x_change = 0


#enemy
enemy_img = pygame.image.load("png_43d2y.png")
enemy_x = random.randint(50,736)
enemy_y = random.randint(50,150)
enemy_x_change = 1
enemy_y_change = 40


#Bullet
#ready - you can't se the bullet on the screen
#fire - bullet is currently moving
bullet_img = pygame.image.load("bullet(1).png")
bullet_x = 0
bullet_y = 480
bullet_x_change = 0
bullet_y_change = 1
bullet_state = "ready"


def player(x,y):
    screen.blit(player_img,(x,y))


def enemy(x,y):
    screen.blit(enemy_img, (x, y))


def fire_bullet(x,y):
    # global - არ გააჩნია ფარგლები
    global bullet_state
    bullet_state = "fire"

    screen.blit(bullet_img,(x+16,y+10))

#game loop - window close
running = True
while running:

    #RGB
    screen.fill((0, 0, 155))

    #Background image
    screen.blit(background,(0,0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # if key is pressed what it can do
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                player_x_change = -2
            if event.key == pygame.K_RIGHT:
                player_x_change = 2

            #გავაკეთეთ ლოგიკა რომ ტყვია არ გაყვეს ხომალდს სანამ და გავაკეთეთ ლოგიკა რომ სანამ ტყვია არ გასცდება ფანჯრის საზღვრებს მანამდე არ გაისროლოს
            if event.key == pygame.K_SPACE:
                if bullet_state == "ready":
                    #აიღებს თავდაპირველ კოორდინატებს გასროლის შემდეგ და ტყვია ამ თავდაპირველ კოორდინატზე იმოძრავებს და არ გაყვება ხომალდს
                    bullet_x = player_x
                    fire_bullet(bullet_x,bullet_y)

        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                player_x_change = 0

    #Player position
    player_x += player_x_change
    if player_x <= 0:
        player_x = 0

    # 736 imitom rom suratis zoma gamoaklda chvens mtlian fanjris zomas
    elif player_x > 736:
        player_x = 736

    #Enemy position
    enemy_x += enemy_x_change
    if enemy_x <= 0:
        enemy_x_change = 1

        #imitom rom yoveli kedeltan misvlis shemdeg chamovides qvevit miuaxlovdes raketas
        enemy_y +=enemy_y_change

    # 736 imitom rom suratis zoma gamoaklda chvens mtlian fanjris zomas
    elif enemy_x > 736:
        enemy_x_change =-1
        enemy_y += enemy_y_change

    #გავაკეთეთ ლოგიკა რომ თუ ტყვია საზღვრებს გასცდება მაშინ მდგომარეობა ready იყოს და არ გაისვრის მანამდე სანამ არ გასცდება ტყვია საზღვრებს
    if bullet_y <= 0:
        bullet_y = 480
        bullet_state = "ready"

    if bullet_state == "fire":
        fire_bullet(bullet_x,bullet_y)
        bullet_y -= bullet_y_change

    player(player_x,player_y)
    enemy(enemy_x,enemy_y)
    pygame.display.update()