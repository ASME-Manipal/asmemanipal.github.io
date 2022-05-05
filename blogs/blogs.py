import pandas as pd

df = pd.read_csv("https://docs.google.com/spreadsheets/d/1TdIJZ77Ihs9MzzOjlUh_Mv7GeamsHF6GU1kE9hvZ5mU/export?format=csv&gid=0")

df = df.sort_values(by='Index')

final_text = ""
for _, blog in df.iterrows():
    print(blog)
    final_text += f"""<div class="blog">
            <img src="images/blogs/blog1.webp">
            <p>{blog['Name']}</p>
            <p>{blog['Author']}</p>
            <p>{blog['Short Description']}</p>
    </div>"""

with open('blogs_template.html', 'r') as inp_file:
    with open('blogs.html', 'w') as out_file:
        text = inp_file.read()
        text = text.replace("{{All the blogs are here}}", final_text)
        out_file.write(text)