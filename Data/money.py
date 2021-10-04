with open('money.txt') as m:
    datas = []
    data = []
    for i in m:
        l = i.split()
        if l[0].startswith("<"):
            if l[2].split(".")[0][-1] =='2':
                data.append("2")
            else:
                data.append("")
        else:
            l = i.split(';')
            data.append(float(l[1].split(":")[1][:-1]))
            data.append(int(l[6].split(":")[1][:-1]))
            datas.append(tuple(data))
            data=[]
datas.sort()

s = ""
for i in datas:
    print(i)
    s += f"""<img alt="snowflakes" src="images/paisa{i[0]}.png" class="snowExample" style="-webkit-animation-delay: {i[1]}s;animation-delay: {i[1]}s;margin-left: {i[2]}%;" />
    """

with open('moneyout.txt', 'w') as m:
    m.write(s)
    # break
