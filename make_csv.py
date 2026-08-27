import pandas as pd

df = pd.read_excel(
    "楽単・優単まとめ 完全版 整形.xlsx",
    header=None,
    engine="openpyxl"
)

print(df.shape)
print(df.head())
