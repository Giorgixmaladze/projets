
import pygame



#მოვახდინეთ თავდაპირველად pygame ის ინიციალიზება 
pygame.init()

#set mode მეთოდის საშუალებით შევქმენით ფანჯარა რომელიც არის 800px სიგანის და 600px სიმაღლის
screen = pygame.display.set_mode((800,600))


#გავაკეთეთ თამაშის უკანაფონი და შევინახეთ background ცვლადში
background = pygame.image.load("background.jpeg")


#set_caption მეთოდის დახმარებით გავაკეთეთ თამაშის სახელი
pygame.display.set_caption("Space invaders")

#.image.load მეთოდის გამოყენებით load მეთოდს გადავეცით სურათის სახელი და მისი გაფართოება
icon = pygame.image.load("space.png")

#.set_icon მეთოდის დახმარებით გავაკეთეთ სურათი ასე რომ ვთქვათ
# ლოგო ჩვენი თამაშის და არგუმენტად გადავეცით icon ცვლადი რომელშიც შენახულია ჩვენი სურათი
pygame.display.set_icon(icon)


#შევქმენით player_img ცვლადი რომელშიც .image.load მეთოდის საშუალებით გადავცემთ სურათის სახელს (ამ შემთხვევაში ხომალდის სურათი - ხომალდი არის მოთამაშე)
player_img = pygame.image.load("10969105451642010534-128.png")

#გავუწერეთ კოორდინატები ჩვენს სურათს x და y ღერძებზე და შევინახეთ ეს კოორდინატები შესაბამის ცვლადებში
player_x = 350
player_y = 480

# player_x_change ცვლადს გამოვიყენებთ იმისთვის რომ ვამოძრავოთ ჩვენი ხომალდი x ღერძზე ღილაკებზე დაჭერის შედეგად
player_x_change = 0


#Enemy - მოწინააღმდეგე
#წამოვიღეთ მოწინააღმდგის სურათი
enemy_img = pygame.image.load("png_43d2y.png")

#შევქმენით ცვლადები რომლებსაც გავუწერეთ თავდაპირველი მდებარეობა x და y ღერძებზე
enemy_x = 0
enemy_y = 0
#შევქმენით ცვლადები რომლებიც აკონტროლებს მდებარეობას მოწინააღმდეგეს x და y ღერძებზე
enemy_x_change = 1
enemy_y_change = 30


#Bullet
#წამოვიღეთ ტყვიის სურათი როდესაც ჩვენი ხომალდი გაისვრის
bullet_img = pygame.image.load("bullet(1).png")

#შევქმენით ცვლადები რომლებსაც გავუწერეთ თავდაპირველი მდებარეობა x და y ღერძებზე
bullet_x = 0
bullet_y = 480

#შევქმენით ცვლადები რომლის საშუალებითაც ვაკონტროლებთ ტყვიის მდებარეობას x და y ღერძებზე
bullet_x_change = 0
bullet_y_change = 1
bullet_state = "ready"

#შევქმენით ფუნქცია player რომელსაც გადავეცით ორი პარამეტრი x და y რომელსაც გადავცემთ მის საბოლოო მდებარეობას არგუმენტად x და y ღერძებზე
def player(x,y):

    #screen.blit მეთოდის საშუალებით მივუთითეთ რა გამოვიტანოთ ეკრანზე და რა პოზიციაზე
    screen.blit(player_img,(x,y))


#შევქმენით ფუნქცია Enemy რომელსაც გადავეცით ორი პარამეტრი x და y რომლებსაც გადავცემთ მის საბოლოო მდებარეობას უკვე არგუმენტად x და y ღერძებზე
def enemy(x,y):
    screen.blit(enemy_img, (x, y))


def fire_bullet(x,y):
    # global - არ გააჩნია ფარგლები
    global bullet_state
    bullet_state = "fire"

    screen.blit(bullet_img,(x+16,y))

def collisdion(bulletY,enemy):
    pass


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