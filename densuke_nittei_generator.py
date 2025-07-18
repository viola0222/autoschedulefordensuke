# densuke_nittei_generator.py
import sys
import calendar
from datetime import datetime

def main():
    if len(sys.argv) != 3:
        print("使い方: python densuke_nittei_generator.py <年> <月>")
        sys.exit(1)

    year = int(sys.argv[1])
    month = int(sys.argv[2])

    # 月の日数を取得
    _, days_in_month = calendar.monthrange(year, month)

    # 曜日名前リスト（月=0,…日=6）
    weekday_names = ['月', '火', '水', '木', '金', '土', '日']

    # 各日付を生成
    for day in range(1, days_in_month + 1):
        dt = datetime(year, month, day)
        wd = weekday_names[dt.weekday()]
        print(f"{month}/{day}({wd})")

if __name__ == "__main__":
    main()
