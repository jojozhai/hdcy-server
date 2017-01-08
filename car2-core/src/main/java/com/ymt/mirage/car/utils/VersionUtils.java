/*
 * 项目名称：pzx-framework-core
 * 类名称: VersionUtils
 * 创建时间: 2016年12月20日 上午11:17:43
 * 创建人: zhailiang@pz365.com
 *
 * 修改历史:
 * 
 * Copyright: 2016 www.pz365.com Inc. All rights reserved.
 * 
 */
package com.ymt.mirage.car.utils;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;

/**
 *
 *
 * @author zhailiang@pz365.com
 * @version 1.0.0
 */
public class VersionUtils {
    
    public static void main(String[] args) throws Exception {
        
        String oldVersion = "2.1.0-SNAPSHOT";
        String newVersion = "2.2.0-RELEASE";
        String projectFolder = "/Users/zhailiang/Documents/pinzhi365/workspace/git-hub/hdcy-server";
        
        File file = new File(projectFolder);
        
        File[] folders = file.listFiles();
        
        for (File folder : folders) {
            if(folder.isDirectory() && folder.getName().startsWith("car")) {
                System.out.println(folder.getName());
                
                File pom = new File(folder, "pom.xml");
                
                if(pom.exists()) {
                    List<String> newLines = new ArrayList<>();
                    List<String> lines = FileUtils.readLines(pom);
                    for (String line : lines) {
                        if(StringUtils.contains(line, oldVersion)){
                            line = StringUtils.replace(line, oldVersion, newVersion);
                        }
                        newLines.add(line);
                    }
                    FileUtils.writeLines(pom, newLines, false);
                }
            }
        }
        
    }

}
