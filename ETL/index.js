


/*
The process!!

1. use the import command
2. create indexes in the collection
3. form the data using aggregation

vvvvv    more info vvvvv

go to mongo, and used the import mongo command
mongoimport --type csv -d test -c products --headerline --drop products.csv

–type: The input format to import: json, csv, or tsv. We are using csv so that’s what we specify.
-d: Specifies what database to use. We used the test database.
-c: Specifies what collection to use. We used a collection called products.
–headerline: Specifies that the first row in our csv file should be the field names.
–drop: Specifies that we want to drop the collection before importing documents.

use

 db.related.createIndex({"$**": 1})     --> can be replaced with individual indexes to select which ones i want

 to create indexes for faster querying


 use

 db.[name of collection].aggregate([
  {
    $lookup: {
      from: '[name of collection you want data from]',
      localField: 'id',
      foreignField: 'answer_id',
      as: 'photos',
    },
  },
  {
    $out: 'answers',
  },
]);


db.[name].aggregate([
  {
    '$match': {
      'product_id': 44
    }
  }, {
    '$sample': {
      'size': 5
    }
  }, {
    '$lookup': {
      'from': 'reviews_photos',
      'localField': 'id',
      'foreignField': 'review_id',
      'as': 'photos'
    }
  }
])


*/

const db = require("../DB");




db.[name of collection].aggregate([
  {
    $match: {
      from: 'transformPhotos',
      localField: 'id',
      foreignField: 'answer_id',
      as: 'photos',
    },
  },
  {
    $limit: 5
  }
]);

db.aggregate(
  [
    {
      $match: { $or: [ { id: 1 }, { feature_id: 1 } ] }
    },

  ]
)

// the below command changes the data by: adding a features array into it...in slightly the wrong way.
db.products.aggregate([
  {
    '$lookup': {
      'from': 'features',
      'localField': 'id',
      'foreignField': 'feature_id',
      'as': 'features'
    }
  },
  {
    '$out': 'products'
  }
])


//////  adding 'related' data to products
db.products.aggregate([
  {
    '$lookup': {
      'from': 'related',
      'localField': 'id',
      'foreignField': 'current_product_id',
      'as': 'related_Products_obj'
    }
  }, {
    '$addFields': {
      'related_Projects': '$related_Products_obj.related_product_id'
    }
  }, {
    '$project': {
      'related_Products_obj': 0
    }
  }, {
    '$out': 'products'
  }
])


///



// SAMPLE

db.orders.aggregate([
  {
     $lookup:
        {
          from: "warehouses",
          let: { order_item: "$item", order_qty: "$ordered" },
          pipeline: [
             { $match:
                { $expr:
                   { $and:
                      [
                        { $eq: [ "$stock_item",  "$$order_item" ] },
                        { $gte: [ "$instock", "$$order_qty" ] }
                      ]
                   }
                }
             },
             { $project: { stock_item: 0, _id: 0 } }
          ],
          as: "stockdata"
        }
   }
])



