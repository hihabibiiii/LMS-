import sqlite3

conn = sqlite3.connect("lms.db")
cursor = conn.cursor()

cursor.execute("UPDATE users SET is_admin = 1 WHERE email='hshabibullah@gmail.com'")
conn.commit()

cursor.execute("SELECT id,name,email,is_admin FROM users")

for row in cursor.fetchall():
    print(row)

conn.close()