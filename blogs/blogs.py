import pandas as pd
from save_image import download_file_from_google_drive

df = pd.read_csv("https://docs.google.com/spreadsheets/d/1TdIJZ77Ihs9MzzOjlUh_Mv7GeamsHF6GU1kE9hvZ5mU/export?format=csv&gid=0")

df = df.sort_values(by='Index')

blog_template = ""
with open('blog_template.html') as inp_file:
    blog_template = inp_file.read()

final_text = ""
for _, blog in df.iterrows():
    # save Image
    image_location = f"images/{blog['Name']}.png"
    # download_file_from_google_drive(blog['Image Link'], image_location)

    # make blog file
    blog_html = blog_template
    blog_html = blog_html.replace("{{Head}}", blog['Name'])
    blog_html = blog_html.replace("{{Image}}", '../'+image_location)
    blog_html = blog_html.replace("{{Content}}", blog['Content'].replace('\n', '<br>'))
    blog_html = blog_html.replace("{{Author}}", blog['Author'])

    file_name = f"blogs/{blog['Name']}.html"
    with open(file_name, 'w') as out_file:
        out_file.write(blog_html)

    # add to blogs
    final_text += f"""
        <a href="{file_name}">
            <div class="blog">
                <img src="{image_location}">
                <p>{blog['Name']}</p>
                <p>{blog['Author']}</p>
                <p>{blog['Short Description']}</p>
            </div>
        </a>
        """


with open('blogs_template.html', 'r') as inp_file:
    with open('blogs.html', 'w') as out_file:
        text = inp_file.read()
        text = text.replace("{{All the blogs are here}}", final_text)
        out_file.write(text)