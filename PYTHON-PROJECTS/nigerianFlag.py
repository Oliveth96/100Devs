import tkinter as tk
window = tk.Tk()

frame1 = tk.Frame(master=window, width=50, height=100, bg="green")
frame1.pack(fill=tk.BOTH, side=tk.LEFT, expand=True)

frame2 = tk.Frame(master=window, width=50, bg="white")
frame2.pack(fill=tk.BOTH, side=tk.LEFT, expand=True)

frame3 = tk.Frame(master=window, width=50, bg="green")
frame3.pack(fill=tk.BOTH, side=tk.LEFT, expand=True)

window.mainloop()