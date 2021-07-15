import pandas as pd

html = ""
df = pd.read_excel("Team.xlsx", header=0)
for _, per in df.iterrows():
    print(per)
    html += f"""
    <div class="person">
        <a target="__blank" href="{per['Linkedin']}"><img src="images/team/{per['Image']}.webp" alt="{per['Name']}"></a>
        <a target="__blank"  href="{per['Linkedin']}">
        <span class="name">{per['Name']}</span>
        <span class="posn">{per['Position']}</span></a>
    </div>
    """
with open('team_html.txt', 'w') as f:
    f.write(html)
