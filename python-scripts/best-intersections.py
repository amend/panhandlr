from pymongo import MongoClient
import json
import pprint

db = MongoClient().traffic

# prints 45 best intersections to panhandle 
# coordinates then obtained from looking up intersecting
# streets on google maps
def getBestIntersections(n):
    cursor = db.austin.find()
    intersections = cursor[0]['data']

    intersections = sorted(intersections, key=lambda intersection: int(intersection[13]), reverse=True)
    for i in range(0, 45):
        print intersections[i][13]
        print intersections[i][8]
        print "" 
 
# makes a file containing the json that has the 25 
# best intersections to panhandle
def makeJSONFile():
    f = open('./intersections.txt', 'r')
    lines = f.readlines()

    inter = {'traffic_volume': 0, 'address': '', 'coordinates': ''}
    ints = {'intersections': []}
    intersectionsList = []
    count = 0
    for l in lines:
        if count == 0:
            inter['traffic_volume'] = int(l.strip())
        elif count == 1:
            inter['address'] = l.strip()
        elif count == 2:
            inter['coordinates'] = l.strip()
            intersectionsList.append(inter)
            print '**********************************'
            for i in intersectionsList:
                print i
            
        count += 1
        if count > 2:
            count = 0
            inter = {'traffic_volume': 0, 'address': '', 'coordinates': ''}
            

    ints['intersections'] = intersectionsList
    print ints
    print len(ints['intersections'])

    j = json.dumps(ints)
    with open('intersections-not-pp.json', 'w') as outfile:
        json.dump(j, outfile)

    pprint.pprint(ints)
    
#getBestIntersections(20)
makeJSONFile()
