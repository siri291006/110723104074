fetch all notifications from API and sort by priority

PRIORITY LOGIC
placement = highest priority
result = medium priority
event = lowest priority

FETCH TOP 10
fetch notifications
give weight to each type
sort by weight
if same weight, sort by timestamp
take first 10 using slice

everytime function runs new data is