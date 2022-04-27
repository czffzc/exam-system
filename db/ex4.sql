/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80022
 Source Host           : localhost:3306
 Source Schema         : ex4

 Target Server Type    : MySQL
 Target Server Version : 80022
 File Encoding         : 65001

 Date: 27/04/2022 15:32:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL COMMENT '密码',
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '用户类型',
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '性别',
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('admin', '1232456', 'admin', '男');
INSERT INTO `user` VALUES ('ddd', '123', 'user', '男');
INSERT INTO `user` VALUES ('f', '123456', 'user', '男');
INSERT INTO `user` VALUES ('fff', '123456', 'user', '男');
INSERT INTO `user` VALUES ('fzcccc', '123456', 'user', '男');
INSERT INTO `user` VALUES ('xty', '111111', 'user', '女');
INSERT INTO `user` VALUES ('zyh', '222222', 'user', '女');
INSERT INTO `user` VALUES ('封作铖', '123456', 'user', '男');

SET FOREIGN_KEY_CHECKS = 1;
