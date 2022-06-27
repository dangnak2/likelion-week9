import express from "express";
import  User  from "../models/user"
import cors from "cors";

const router = express();

const corsOptions = {
    origin : "http://localhost:3000",                         //허락하고자 하는 요청주소여야 함!
    credentials: true,
    methods : '*',                                            //GET,HEAD,POST만 기본 메소드. 나머지는 설정해줘야함. 
    allowedHeaders : 'authorization',
    exposedHeaders : 'authorization'
}  
router.options("*",cors(corsOptions));  


// GET /api/posts - 운영진 목록 전체 조회
router.get("/",cors(corsOptions), async(req, res) => {
  // const {id, password} = req.decode;
  const index = await User.findAll({})
  console.log(User);
  return res.json({
      data : index,
  });
});

// GET /api/posts/:postId - 운영진 개별 항목 조회
router.get("/:postId", cors(corsOptions), async(req, res) => {
    // const {id, password} = req.decode;
    const { postId } = req.params;

    const index = await User.findAll({
      where : postId,
    });

    if(index.length === 0 ){
      return res.json({
        error: "Post not exist",
      });
    } else{
      return res.json({
        data : index
    });
    }
  });

// POST /api/posts - 운영진 생성
 
router.post("/", cors(corsOptions), async(req, res) => {

    const index = await User.create({   
        userId : req.body.userId,
        name : req.body.name,
        position : req.body.position,
        email : req.body.email,
        github : req.body.github,
        insta : req.body.insta,
        likelion : req.body.likelion,
        phone : req.body.phone,
        profile : req.body.profile
    });

  return res.json({
    data: {
      post: {
        id: index.userId,
      },
    },
  });
});
// // PUT /api/posts/:postId - 특정 운영진 정보 수정
// router.put("/:postId", async(req, res) => {
//   const { userId } = req.params;

//   //id가 postId와 동일한 것 중 한 개만 읽어온다.(글의 존재여부, 작성자 식별을 위함))
//   const index = await User.findOne({                    
//     where : {
//         id : userIdy
//     }
//   });

//   if(!index) {                                                //해당 글이 없을 시 
//     return res.json({
//         error : "That Post does not exist",
//     }); 
//  }
// if( index.userId !== postId ){                              
//     return res.json({
//         error : "Cannot modify post",
//     })
// }
//     await User.update({                                             //동일 작성자, 동일 글일 경우에만 내용을 수정한다. 
//       userId : req.body.userId,
//       name : req.body.name,
//       position : req.body.position,
//       email : req.body.email,
//       github : req.body.github,
//       insta : req.body.insta,
//       likelion : req.body.likelion,
//       phone : req.body.phone,
//       profile : req.body.profile
//   },
//       {
//         where: {
//         id : userId,
//         writer : index.id
//         }
//       }
//     );

//   return res.json({
//     data: {
//       id: index.id,
//     },
//   });
// });

// // DELETE /api/posts/:postId - 특정 운영진 삭제
// router.delete("/:postId", (req, res) => {
//   const { postId } = req.params;
//   const { writer }  = req.decoded.id;

//   // const index = postData.findIndex((post) => post.id === postId);
//   const index = User.findAll({
//     where: {
//       id : postId,
//     }
//   });

//   if (index === 0) {
//     return res.json({
//       error: "Cannot delete post",
//     });
//   } else if (index.writer === writer) {
//     Posts.destroy({
//       where:{
//         id : postId,
//       }
//     });
//   }

//   return res.json({
//     data: "Successfully deleted",
//   });
// });

export default router;
