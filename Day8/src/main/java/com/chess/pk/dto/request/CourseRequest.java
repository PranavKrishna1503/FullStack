package com.chess.pk.dto.request;


// import com.chess.pk.model.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseRequest {

     private Long courseId;
     private String coursename;
     private String content;
     // private User user;
}


