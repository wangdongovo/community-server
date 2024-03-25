# 社区

## 创建用户表
```sql
CREATE TABLE `users` (
  `uid` int(8) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '用户ID，自增且唯一',
  `avatar_url` varchar(255) DEFAULT NULL COMMENT '头像的URL地址',
  `nickname` varchar(50) DEFAULT NULL COMMENT '昵称，同时设置了唯一性约束',
  `bio` text COMMENT '个人介绍',
  `gender` enum('Male','Female','Other') DEFAULT NULL COMMENT '性别，使用ENUM类型限定为''Male'', ''Female'', ''Other''',
  `age` int(11) DEFAULT NULL COMMENT '年龄',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱，同时设置了唯一性约束',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建账号的时间，默认为当前时间戳',
  `deactivated_at` timestamp NULL DEFAULT NULL COMMENT '注销账号的时间，可以为NULL表示账号尚未注销',
  `last_login_ip` varchar(15) DEFAULT NULL COMMENT '上一次登录的IP地址',
  `password` varchar(255) DEFAULT NULL COMMENT '用户密码',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```