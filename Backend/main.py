import gspread
import json
import datetime
#ServiceAccountCredentials：Googleの各サービスへアクセスできるservice変数を生成します。
from oauth2client.service_account import ServiceAccountCredentials
import os
from dotenv import load_dotenv
import feedparser
import requests
import pprint
# .envファイルの内容を読み込みます
load_dotenv()

from datetime import datetime as dt

def SortByTime(data_Articles):
    sorted_data = sorted(data_Articles, key=lambda s: s["date"], reverse=True)
    for i in range(len(sorted_data)):
        date = sorted_data[i]["date"]
        sorted_data[i]["date"] = date[0:10]
    return sorted_data

def portfolio_add_info(Articles_data,SheetName="Articles"):
    credentials = os.environ['credentials']
    gc = gspread.service_account_from_dict(credentials)
    # 共有設定したスプレッドシートキーを変数[SPREADSHEET_KEY]に格納する。
    SPREADSHEET_KEY = os.environ['SPREADSHEET_KEY']
    # 共有設定したスプレッドシートのシートを開く
    Articles = gc.open_by_key(SPREADSHEET_KEY).worksheet(SheetName)
    # 値を追加
    index_list= ["date","icon","title","url"]
    # 複数セルの同時書き込み
    range = Articles.range(f"A2:D{ len(Articles_data) + 2}")

    k=0
    for Artcle_data in Articles_data:
        for index in index_list:
            range[k].value = Artcle_data[index]
            k+= 1

    Articles.update_cells(range)

    print("正常に書き込み終了")

if __name__=='__main__':

    d_atom = feedparser.parse('https://speakerdeck.com/kurikinton105.atom')

    print(type(d_atom))
    # <class 'feedparser.FeedParserDict'>

    pprint.pprint(d_atom, depth=1)

    #portfolio_add_info("zsd")