package com.evan.lycaa.dao;

import com.evan.lycaa.pojo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDAO extends JpaRepository<User,Integer> {
    User findByUsername(String username);//通过用户名查询
    User getByUsernameAndPassword(String username,String password);
     //通过用户名及密码查询
}
