

# 个人博客

## 1.项目描述

`项目开源GitHub搜索ling-kong-ran或者小凌同学即可看见我的个人仓库`

`博客前端项目地址` https://github.com/ling-kong-ran/blog-vue-.git 

`博客后端项目地址` https://github.com/ling-kong-ran/vueblog.git 

基于vue+springboot的前后端分离项目，后端：主要采用jwt认证，密码加密采用md5+salt+hash散列加密，生成密文存入数据库，接口采用restFul APi 规范

- GET（SELECT）：从服务器取出资源（一项或多项）。
- POST（CREATE）：在服务器新建一个资源。
- PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。
- PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。
- DELETE（DELETE）：从服务器删除资源。
- 还有两个不常用的HTTP动词。
- HEAD：获取资源的元数据。
- OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。

，这样API不限于客户端，不限于前端和后端程序员之间晦涩难懂的自定义API。POST请求：提交，增加，GET请求：获取后端资源...如:PUT:http://localhost:8888/blog/user/12134：就是修改一个用户id为12134的相关信息，再例如DELETE：http://localhost:8888/blog/user/12134：就是删除一个id为12134的用户

前端采用vue-cli +element ui进行页面开发以及封装对象并 进行ajax异步请求

## 2.公共页面需求分析

1. 首页：展示博客文章基本信息并加入分页功能、展示关于我基本信息、展示标签、展示最新推荐博客title
2. 分类：展示博客文章基本信息并加入分页功能、展示关于我基本信息、展示分类
3. 标签：展示博客文章基本信息并加入分页功能、展示关于我基本信息、展示标签
4. 归档：展示时间线，文章类型和文章标题、展示关于我基本信息、展示标签
5. 关于我：展示公众号、微信、qq、github、csdn、和qq邮箱
6. 留言板：输入昵称、邮箱和邮箱网址以及内容
7. 友链：展示一些他人博客地址
8. 全局搜索功能：搜索文章title展示文章即可

## 3.管理页面需求分析

1. 博客：发布、保存、删除、修改、查询
2. 标签：保存、删除、修改、查询
3. 类型：保存、删除、修改、查询

## 4.ER图

![1603951363707](C:\Users\Administrator\Desktop\bloger.png)

## 5.项目架构-前后端分离

前端vue-cli3+element ui+axios+mavon-editor+markdown-it+github-markdown-css

后端springboot+shiro+mybatis-plus+mysql+lombook+jwt-redis认证

### 1.后端

#### 1.1 引入依赖

```xml
<dependencies>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>3.4.0</version>
        </dependency>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-generator</artifactId>
            <version>3.4.0</version>
        </dependency>
        <dependency>
            <groupId>org.apache.velocity</groupId>
            <artifactId>velocity-engine-core</artifactId>
            <version>2.2</version>
        </dependency>
        <!--引入swagger2-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>2.8.0</version>
        </dependency>
        <!--引入swagger-ui-->
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger-ui</artifactId>
            <version>2.8.0</version>
        </dependency>
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.1.19</version>
        </dependency>
        <dependency>
            <groupId>cn.hutool</groupId>
            <artifactId>hutool-all</artifactId>
            <version>5.4.4</version>
        </dependency>
        <dependency>
            <groupId>com.auth0</groupId>
            <artifactId>java-jwt</artifactId>
            <version>3.11.0</version>
        </dependency>
        <!--jwt工具包-->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt</artifactId>
            <version>0.9.1</version>
        </dependency>
        <dependency>
            <groupId>org.crazycake</groupId>
            <artifactId>shiro-redis-spring-boot-starter</artifactId>
            <version>3.2.1</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
            <version>2.2.5.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-redis</artifactId>
            <version> 1.4.4.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
            <exclusions>
                <exclusion>
                    <groupId>org.junit.vintage</groupId>
                    <artifactId>junit-vintage-engine</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>6.0.19.Final</version>
        </dependency>
        <dependency>
            <groupId>org.hibernate</groupId>
            <artifactId>hibernate-validator</artifactId>
            <version>6.0.13.Final</version>
        </dependency>
    </dependencies>
```

#### 1.2 解决跨域问题

本项目采用前后端分离架构，两个项目的应用服务器的端口号不一致，会触发同源协议

 现存的网络浏览器的安全模式是根据同源协议（Same-Origin-Policy），并对网络应用提供了一些基础的保护功能。 

`CrosFilter`

```java

@Component
public class CrosFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authentication,X-CAF-Authorization-Token,sessionToken,X-TOKEN");
        res.setHeader("Content-Type", "application/json;charset=utf-8");//解决前端post请求跨域问题
        //res.setHeader("Access-Control-Allow-Headers", "access-control-allow-origin, authority, content-type, version-info, X-Requested-With");
        if (((HttpServletRequest) servletRequest).getMethod().equals("OPTIONS")) {
            ((HttpServletResponse) servletResponse).setStatus(HttpStatus.OK.value());
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);

    }
}

```

#### 1.3 Swagger配置

```java
@Configuration
@EnableSwagger2
//@ComponentScan("com.ling.vblog.controller")
public class SwaggerConfig {

    @Bean
    public Docket createRestApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.basePackage("com.ling.vblog.controller"))
                .paths(PathSelectors.any())
                .build();
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("blog")
                .description("blog")
                .termsOfServiceUrl("http://www.xxx.com/")
                //.contact(contact)
                .version("1.0")
                .build();
    }

}
```



#### 1.4 mybatis-plus配置

mybatis-plus是对mybatis的增强，内置了基本CRUD,以及代码生成器的作用，大大加快了开发效率，是快速开发的不二之选。

```java
@Configuration
@MapperScan("com.ling.vblog.mapper")//指定mapper扫描包的路径
public class MpConfig {

}
```

#### 1.5 引入shio

##### 1.5.1shiro配置

```java
@Configuration
@SuppressWarnings("all")
public class ShiroConfig {
    @Autowired
    JwtFilter jwtFilter;

    //创建自定义ream
    @Bean
    public CustomRealm getcustomReam(){
        return new CustomRealm();
    }
    //创建session管理器
    @Bean
    public SessionManager sessionManager(RedisSessionDAO redisSessionDAO) {
        DefaultWebSessionManager defaultSessionManager = new DefaultWebSessionManager();
        defaultSessionManager.setSessionDAO(redisSessionDAO);//将session交给redis管理
        return defaultSessionManager;
    }

    //创建安全管理器
    @Bean
    public DefaultWebSecurityManager getSecurityManager(CustomRealm realm,
                                              SessionManager sessionManager,
                                              RedisCacheManager redisCacheManager){
        DefaultWebSecurityManager sm= new DefaultWebSecurityManager(realm);
        sm.setSessionManager(sessionManager);
        sm.setCacheManager(redisCacheManager);
        return sm;
    }


    //ShiroFilterChainDefinition
    @Bean
    public ShiroFilterChainDefinition shiroFilterChainDefinition(){
        DefaultShiroFilterChainDefinition shiroFilterChainDefinition=new DefaultShiroFilterChainDefinition();
        Map<String, String> filter=new LinkedHashMap<>();
        filter.put("/**","jwt");
        shiroFilterChainDefinition.addPathDefinitions(filter);
        return shiroFilterChainDefinition;
    }

    //创建shiroFilter工厂
    @Bean("shiroFilterFactoryBean")
    public ShiroFilterFactoryBean getshiroFilter(DefaultWebSecurityManager securityManager,ShiroFilterChainDefinition shiroFilterChainDefinition){
        //1.创建过滤器工厂
        ShiroFilterFactoryBean shiroFilterFactoryBean = new ShiroFilterFactoryBean();
        //2.设置安全管理器
        shiroFilterFactoryBean.setSecurityManager(securityManager);
        //3.通用配置（跳转登录页面，未授权跳转的页面）
        //shiroFilterFactoryBean.setLoginUrl("/author?code=1");//未登录跳转url
        //shiroFilterFactoryBean.setUnauthorizedUrl("/author?code=2");//未授权跳转url
        //4.设置自定义的jwt过滤器
        Map<String, Filter> filters = new HashMap<>();
        filters.put("jwt",jwtFilter);
        shiroFilterFactoryBean.setFilters(filters);

        Map<String, String> filterMap = shiroFilterChainDefinition.getFilterChainMap();
        shiroFilterFactoryBean.setFilterChainDefinitionMap(filterMap);


        return shiroFilterFactoryBean;
    }

    /*
    开启注解支持
    * */
    @Bean
    public static DefaultAdvisorAutoProxyCreator getDefaultAdvisorAutoProxyCreator() {

        DefaultAdvisorAutoProxyCreator defaultAdvisorAutoProxyCreator = new DefaultAdvisorAutoProxyCreator();
        defaultAdvisorAutoProxyCreator.setUsePrefix(true);

        return defaultAdvisorAutoProxyCreator;
    }


}
```



##### 1.5.2自定义realm

```java
public class CustomRealm  extends AuthorizingRealm {
    @Autowired
    private UserService userService;

    @Override
    public boolean supports(AuthenticationToken token) {
        return token instanceof JwtToken;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        return null;
    }
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
        JwtToken jwtToken = (JwtToken) authenticationToken;
        String id = JWTUtils.verifyToken(String.valueOf(jwtToken.getPrincipal())).getClaim("id").asString();
        User user = userService.getById(Integer.valueOf(id));
        if (user==null){
            throw new UnknownAccountException("账户不存在");
        }
        Profile profile=new Profile();
        BeanUtil.copyProperties(user,profile);
        return new SimpleAuthenticationInfo(profile,jwtToken.getCredentials(),getName());
    }
}

```

##### 1.5.3自定义shiro-principal vo 

目的是为了分层shiro层的尽量不要去影响Model层

```java
@Data
public class Profile implements Serializable {
    private Long id;

    private String username;

    private String avatar;

    private String email;

    private String nickname;
}

```

##### 1.5.4自定义JwtFilter

jwt拦截器：拦截请求头中带有`Authentication`的所有请求进行授权认证

```java
@Component
public class JwtFilter extends AuthenticatingFilter {

    @Override
    protected AuthenticationToken createToken(ServletRequest servletRequest, ServletResponse servletResponse) throws Exception {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String jwt = request.getHeader("Authentication");
        if (StringUtils.isEmpty(jwt)) {
            return null;
        }
        //  JWTUtils.getToken();
        return new JwtToken(jwt);
    }

    @Override
    protected boolean onAccessDenied(ServletRequest servletRequest, ServletResponse servletResponse) throws Exception {
        //
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        String jwt = request.getHeader("Authentication");
        if (StringUtils.isEmpty(jwt)) {
            return true;
        } else {
            //校验jwt
            try {
                JWTUtils.verifyToken(jwt);
            }catch (ShiroException e){
                e.printStackTrace();
            }
            //执行登录
            return executeLogin(servletRequest,servletResponse);
        }
    }

    @Override
    protected boolean onLoginFailure(AuthenticationToken token, AuthenticationException e, ServletRequest request, ServletResponse response) {
        HttpServletResponse httpServletResponse = (HttpServletResponse) response;
        Throwable throwable=e.getCause()==null? e:e.getCause();
        AjaxResult result=AjaxResult.error(throwable.getMessage());
        String json = JSONUtil.toJsonStr(result);
        try {
            httpServletResponse.getWriter().print(json);
        } catch (IOException ioException) {
            ioException.printStackTrace();
        }

        return super.onLoginFailure(token, e, request, response);
    }

    @Override//进入filter之前的操作，解决跨域问题
    protected boolean preHandle(ServletRequest request, ServletResponse response) throws Exception {
        HttpServletRequest httpServletRequest= WebUtils.toHttp(request);
        HttpServletResponse httpServletResponse= WebUtils.toHttp(response);
        httpServletResponse.setHeader("Access-control-Allow-Origin",httpServletRequest.getHeader("Origin"));
        httpServletResponse.setHeader("Access-control-Allow-Methods","GET,POST,OPTIONS,PUT,DELETE");
        httpServletResponse.setHeader("Access-control-Allow-Headers",httpServletRequest.getHeader("Access-control-Allow-Headers"));

        //跨域时会首先发送一个options请求，这里我们给options请求直接返回正常状态
        if (httpServletRequest.getMethod().equals(RequestMethod.OPTIONS.name())){
            httpServletResponse.setStatus(org.springframework.http.HttpStatus.OK.value());
            return false;
        }

        return super.preHandle(request, response);
    }
```



#### 1.6 封装rusult

对于前后端分离的项目后端只负责把数据以Json对象的形式传输给前端，这里我对Map进行了简易封装，解决了controller代码冗余问题，让controller的代码量大大减少，事实上controller不应该写业务逻辑的相关代码

```java
public class AjaxResult extends HashMap<String, Object> implements Serializable {
    private static final long serialVersionUID = 1L;
    public AjaxResult(){

    }
    public AjaxResult(boolean status, String msg){
        super.put("status",status);
        super.put("msg",msg);
    }

    public AjaxResult(boolean status, String msg, Object data)
    {
        super.put("status",status);
        super.put("msg",msg);
        if (ObjectUtils.isNotEmpty(data))
        {
            super.put("data", data);
        }
    }
    public static AjaxResult success(){
        return AjaxResult.success("操作成功");
    }
    public static AjaxResult success(Object data){
        return AjaxResult.success("操作成功",data);
    }

    public static  AjaxResult success(String msg){
        return new AjaxResult(true,msg);
    }
    public static AjaxResult success(String msg, Object data){
        return new AjaxResult(true,msg,data);
    }

    public static AjaxResult error(){
        return AjaxResult.error("操作失败");
    }
    public static AjaxResult error(Object data){
        return AjaxResult.error("操作失败",data);
    }

    public static AjaxResult error(String msg){
        return new AjaxResult(false,msg);
    }
    public static AjaxResult error(String msg, Object data){
        return new AjaxResult(false,msg,data);
    }
}

```



#### 1.7 全局异常处理

如果每个controller的每个方法都要进行异常捕获的话，那将有很多代码冗余问题（因为每个请求都要进try-catch处理），这里采用了全局异常处理的思路，将所有的请求异常捕获放到一个Handler中进行捕获并返回Json数据对象

```java
@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    //@ResponseStatus(HttpStatus.UNAUTHORIZED)//未授权
    @ExceptionHandler(value = ShiroException.class)
    public AjaxResult handler(ShiroException e){
        log.error("运行时异常-----------------------[{}]",e);
        e.printStackTrace();
        return AjaxResult.error(e.getMessage());
    }

    //@ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(value = MethodArgumentNotValidException.class)
    public AjaxResult handler(MethodArgumentNotValidException e){
        e.printStackTrace();
        log.error("实体校验异常-----------------------[{}]",e);
        BindingResult bindingResult = e.getBindingResult();
        ObjectError objectError = bindingResult.getAllErrors().stream().findFirst().get();

        return AjaxResult.error(objectError.getDefaultMessage());
    }

    //@ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(value = RuntimeException.class)
    public AjaxResult handler(RuntimeException e){
        e.printStackTrace();
        log.error("运行时异常-----------------------[{}]",e);
        return AjaxResult.error(e.getMessage());
    }

    @ExceptionHandler(value = IllegalArgumentException.class)
    public AjaxResult handler(IllegalArgumentException e){
        e.printStackTrace();
        log.error("Assert异常-----------------------[{}]",e);
        return AjaxResult.error(e.getMessage());
    }
}

```



#### 1.8 登录接口开发、

密码加密方式采用MD5+salt+1024次hash散列进行加密，方便快速开发这里的salt直接用的用户名，而不是随机产生的随机盐

```java
    @PostMapping("/login")
    public AjaxResult login(@Valid @RequestBody LoginDto loginDto, HttpServletResponse response) {
        User user = userService.getOne(new QueryWrapper<User>().eq("username", loginDto.getUsername()));
        Assert.notNull(user, "用户不存在");
        String realPassword = new Md5Hash(loginDto.getPassword(), loginDto.getUsername(),1024).toHex();
        if (!user.getPassword().equals(realPassword)) {
            return AjaxResult.error("密码不正确");
        }
        Map<String, String> map = new HashMap<>();
        map.put("id", user.getId().toString());
        map.put("username", user.getUsername());
        map.put("avatar", user.getAvatar());
        map.put("nickname", user.getNickname());
        String jwt = JWTUtils.getToken(map);
        response.setHeader("Authentication", jwt);
        response.setHeader("Access-control-Expose-Headers", "Authentication");
        return AjaxResult.success(map);
    }
```

#### 1.9 退出接口开发

```java
@RequiresAuthentication@GetMapping("/logout")public AjaxResult logout(){    SecurityUtils.getSubject().logout();    return AjaxResult.success();}
```

#### 

### 2.前端

#### 2.1 设置路由

```js
routes: [
        {path: '/', name:'Index', redirect: '/blogs'},
        {path: '/blogs',name:'Blogs', component: Blogs},
        {path: '/login',name:'Login', component: Login},
        {path: '/blog/add',name:'BlogEdit', component: BlogEdit},
        {path: '/blog/:blogId',name:'BlogDetail', component: BlogDetail}

    ]
```

#### 2.2 开发页面

```markdown
VueCli单页面开发模式，采用路由解决页面跳转问题而不需要刷新整个页面
页面整体布局采用上中下三块
```

![1604132616250](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1604132616250.png)

```markdown
header中主要放导航菜单
main主要实现功能模块页面的开发
footer主要是加入自己博客的一些基本信息以及版权信息或者注意事项等等
```

```markdown
views
```

![1604132772183](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1604132772183.png)



```markdown
compentents
```

![1604132852441](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1604132852441.png)

```markdown
前端项目页面主入口：App.vue
```

```js
<template>
    <div id="app">
        <el-container>
            <Header></Header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer>
                <Footer>
                </Footer>
            </el-footer>
        </el-container>
    </div>
</template>
```

```markdown
登录页面
```

![1604133060077](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1604133060077.png)



#### 2.3 登录开发

##### 2.3.1处理跨域问题

```markdown
vue前端发送登录post请求时出现以下错误
has been blocked by CORS policy: Request header field content-type is not al
```

 `解决方案`

```markdown
如果为post请求必须在CrosFilter中加上
res.setHeader("Content-Type", "application/json;charset=utf-8");
```

CrosFilter完整代码

```java
@Component
public class CrosFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) servletResponse;
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-CAF-Authorization-Token,sessionToken,X-TOKEN");
        res.setHeader("Content-Type", "application/json;charset=utf-8");//这个是重点
        if (((HttpServletRequest) servletRequest).getMethod().equals("OPTIONS")) {
            ((HttpServletResponse) servletResponse).setStatus(HttpStatus.OK.value());
            return;
        }
        filterChain.doFilter(servletRequest, servletResponse);

    }
```

```js
//前端表单验证发送post登录请求
submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        //alert('submit!');
                        this.$axios.post("http://localhost:8888/login",this.ruleForm).then(res=>{
                            console.log(res);
                        })
                    } else {
                        //console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
```

成功拿到后端返回数据

```markdown
{data: {…}, status: 200, statusText: "", headers: {…}, config: {…}, …}
config: {transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", adapter: ƒ, …}
data:
data:
avatar: "string"
id: "12"
nickname: "string"
username: "ling"
__proto__: Object
msg: "操作成功"
status: true
__proto__: Object
headers:
authentication: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuaWNrbmFtZSI6InN0cmluZyIsImlkIjoiMTIiLCJhdmF0YXIiOiJzdHJpbmciLCJleHAiOjE2MDQ3MzgxOTAsInVzZXJuYW1lIjoibGluZyJ9.fPiy_Ji4tsOFhp7g46PpHZ6jq-etvqNbccNDd-GyKT8"
content-type: "application/json;charset=utf-8"
__proto__: Object
request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
status: 200
statusText: ""
__proto__: Object
```

##### 2.3.2存储userInfo和jwt

将userinfo存到sessionstrage中

jwt存到localstorage中

```js
#userInfo
let userInfo=localStorage.setItem("userInfo",JSON.stringify(res.data.data))
```

```js
#token
let token=res.headers['authentication'];
```

##### 2.3.3vuex的使用

```js
state: {
    token:'',
    userInfo:{}
  },
  mutations: {//setter
    SET_TOKEN:(state,token)=>{
      state.token=token;
      sessionStorage.setItem("token",token);
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo=userInfo;
      localStorage.setItem("userInfo",userInfo);
    }

  },
  actions: {//getter
    GET_TOKEN:()=>{
      return sessionStorage.getItem("token");
    },
    GET_USERINFO:()=>{
      return localStorage.getItem("userInfo");
    }
  }
```

##### 2.3.4axios拦截器

```js
"use strict";

import Vue from 'vue';
import axios from "axios";
import Element from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(//前置拦截：发送请求前的处理
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(//后置拦截：后端响应体被捕获前的处理
  function(response) {
    // Do something with response data
      if (!response.data.status){
      Element.Message.error(response.data.msg)
    }

    return response;
  },
  function(error) {
    // Do something with response error
      Element.Message.error('操作失败')
      return Promise.reject(error);
  }
);

Plugin.install = function(Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;

```

##### 2.3.5路由登录权限

`针对添加和编辑进行登录权限判断`

`1.在路由里面添加如下内容`

```js
{path: '/blog/:blogId/edit',name:'BlogDetail', component: BlogEdit,meta:{
                requireAuth:true
            }}
```

`2.src/permission.js`

```js
import router from "./router";
//路由判断登录，根据路由配置文件的参数
router.beforeEach((to, from, next) => {
    if (to.matched.some(record=>record.meta.requireAuth)){
        //判断该路由是否需要登录权限
        const token = localStorage.getItem('token')
        console.log('-----------------------' + token)
        if (token) {//判断当前的token是否存在，登录存入的token
            if (to.path === '/login') {
                next()
            } else {
                next()
            }
        } else {//没有token
            next({
                path: '/login'
            })
        }
    }else {
        next()
    }
    }
)

```

`3.在main.Js中导入`

```js
import './permission'
```

#### 2.4 公共组件Header

##### 2.4.1.布局

- 位于浏览器窗口顶部，不固定在页面文档流中

- css样式中position：flexd  在给予z-index=1即可因为背景为-1，公共区域为0,这样头部导航条就不会因为向下滑动被挡住了而不能点击

##### 2.4.2.作用

主要作用就是起到了导航以及路由的作用

##### 2.4.3.截图

```html
<template>



    <div class="box">
                <el-menu  :router="true" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index="/blogs">
                        博客主页
                    </el-menu-item>
                    <el-menu-item index="/login" v-show="!isLogin">
                        登录
                    </el-menu-item>
                    <el-menu-item index="/tag">
                        标签
                    </el-menu-item>
                    <el-menu-item index="/type">
                        类型
                    </el-menu-item>
                    <el-menu-item >
                        <el-dropdown ref="login" trigger="click" v-show="isLogin">
                            <span class="el-dropdown-link">
                                <el-avatar :src="user.avatar" ></el-avatar>
                                {{user.nickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
                            </span>
                            <el-dropdown-menu  >
                                <el-popconfirm
                                        @onConfirm="logout"
                                        title="确定退出吗？"
                                >
                                    <el-button  round type="text " slot="reference">退出</el-button>
                                </el-popconfirm>
                                <el-dropdown-item>
                                    <div style="text-align: center">
                                        <el-link href="#/blog/add" :underline="false"  type="success"> 发表</el-link>
                                    </div>
                                </el-dropdown-item>


                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-menu-item>
                    <div>

                    </div>
                </el-menu>

    </div>
</template>

<script>
    export default {
        name:'Header',
        data:function() {
            return {
                activeIndex: '/blogs',
                user:{
                    nickname:'请登录',
                    avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
                },
                isLogin:this.$store.getters.getLogin
            }
        },
        methods: {

            handleSelect(key, keyPath) {
                //this.$router.push(keyPath);
            },
            logout(){
                console.log("退出了")
                this.$axios.get('/logout',{
                    headers:{
                        "Authentication":localStorage.getItem('token')
                    }
                }).then(res=>{
                    this.$store.commit('REMOVE_INFO');
                })
                this.isLogin=false;
            }

        },
        created() {
            if (!this.$store.getters.getUser){
                this.user.nickname='未登录'
            }else {
                this.user=this.$store.getters.getUser;
                this.isLogin=true;
            }

        }

    }
</script>

<style scoped>
    .box{
        z-index: 1;
        position: fixed;
        color: aliceblue;
        width: 100%;
    }

</style>

```

#### 2.5 公共组件Footer

##### 2.5.1.布局

position:flexd 悬浮于浏览器窗口最下方

##### 2.5.2.作用

可以在footer放置一些博客联系方式以及版权信息等

##### 2.5.3.截图

```html
<template>
    <div class="bigbox">
                <div class="footerbox">
                    <p>
                        欢迎光临博客,如果觉得不错可以推给小伙伴哟,
                        也欢迎投稿
                        <el-link type="success" href="https://mail.qq.com/">
                            3204170464@qq.com
                        </el-link>
                    </p>
                </div>
<!--        <el-carousel indicator-position="outside" class="imgs">-->
<!--            <el-carousel-item v-for="item in imgs" :key="item">-->
<!--                <el-image-->
<!--                        style="width: 100%; height: 100%"-->
<!--                        :src="item"-->
<!--                        fit="fit"></el-image>-->
<!--            </el-carousel-item>-->
<!--        </el-carousel>-->
    </div>
</template>

<script>
    import img1 from '../assets/imgs/1.jpg'
    import img2 from '../assets/imgs/2.jpg'
    import img3 from '../assets/imgs/3.jpg'
    import img4 from '../assets/imgs/4.jpg'
    export default {
        name: "Footer",
        data(){
            return{
                imgs:[img1,img2]
            }
        }
    }
</script>

<style scoped type="text/css">
    .el-row{
        margin-top: 50px;
    }
    .bigbox{
        left: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        position: fixed;
        z-index: 0;
    }
    .footerbox{
        width: 100%;
        height: 100%;
        background-color: aliceblue;
        color: black;
        opacity: 0.7;
        font-family: Arial,Helvetica,Calibri,serif;
        text-align: center;
    }
    .footerbox p{
        font-style: normal ;
        font-weight: bolder;
        font-size: small;
    }


</style>

```

#### 2.6 博客主页页面开发

##### 2.6.1截图

```html
<template>


    <div class="block">

        <div class="blogsbox">
            <el-timeline style="width: 70%; ;margin: 0 auto"  >
                <el-timeline-item class="top" v-for="blog in blogs" :timestamp="blog.createTime" placement="top">
                    <router-link :underline="false" :to="{name:'BlogDetail',params:{blogId:blog.id}}">
                        <el-card class="card">
                            <div class="line">
                                <i class="el-icon-view">{{blog.views}}</i>

                                <h4>
                                    {{blog.title}}
                                </h4>
                            </div>

                            <div class="demo-image">
                                    <el-image
                                            v-show="blog.firstPicture"
                                            style="width: 100%; height: auto;padding: 0"
                                            :src="blog.firstPicture"
                                            >
                                        <div slot="error" class="image-slot">
                                        </div>
                                    </el-image>
                            </div>
                            <p>{{blog.description}}</p>
                            这是我的个人博客，记录学习进度和关于编程、写作、思考相关的任何内容...

                        </el-card>
                    </router-link>
                    <div class="editbtn" v-if="isCurrentUser(blog)">
                        <el-button @click="edit(blog)"  type="success" circle>
                            <i class="el-icon-edit"></i>
                        </el-button>
                    </div>


                </el-timeline-item>

            </el-timeline>

        </div>

        <el-pagination class="page"
                background
                layout="prev, pager, next"
                :current-page="currentPage"
                :page-size="pageSize"
                @current-change=getBlogPage
                :page-count="pageCount">
        </el-pagination>
    </div>
</template>

<script>
    import BlogEdit from "./BlogEdit";

    export default {
        name: "Blogs",
        data(){
            return{
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                //blog:{},
                currentPage:1,
                pageSize:5,//1页有多少个
                pageCount:2,
                blogs:[],

            }
        },
        methods:{
            getBlogPage(currentPage){
                this.$axios.get("/blogs?currentPage="+currentPage).then(res=>{
                    console.log(res.data.data);
                    this.blogs=res.data.data.records;
                    this.pageCount=res.data.data.total;
                    this.currentPage=res.data.data.currentPage;
                    this.pageSize = res.data.data.pageSize;
                })
            },
            isCurrentUser(blog){
                if (sessionStorage.getItem('userInfo')!=null){
                    return blog.userId == this.$store.getters.getUser.id;
                }

            },
            edit(blog){
                const blogId = blog.id
                this.$router.push({name:'BlogUpdate',params:{blogId:blogId}})
            }

        },
        created() {
            this.getBlogPage(this.currentPage);
        }

    }
</script>

<style  type="text/css">

    .el-icon-edit:before{
        position: relative;
    }
    .editbtn{
        position: absolute;
        bottom: 4px;
        left: 35px;
    }
    .line i{
        position: absolute;
        left: 50px;
    }
    .demo-image{
        padding: 0;
    }
    .bigbox{
        width: auto;

    }

    .block{
        margin-top: 0;
        text-align: center;
    }
    a{
        text-decoration: none;
    }
    .router-link-active{
        text-decoration: none;
    }
    .el-timeline-item__timestamp.is-top{
        margin-right: 70%;
        width: 100px;
        color: white;
    }
    .card{
        height: auto;
        z-index: -1;
        width: auto;
    }
    .page{
        margin-top: 0;
        z-index: 200;
    }

</style>

```



#### 2.7 编辑页面开发

##### 2.7.1截图

```html
<template>
    <div class="editbox">


        <el-form label-position="top" :model="blog" :rules="rules" ref="blog" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="title" >
                <div ><span class="in"><i class="el-icon-collection"></i>标题:</span><el-input class="myinput" v-model="blog.title"></el-input></div>
            </el-form-item>
            <el-form-item prop="firstPicture">
                <div ><span class="in"><i class="el-icon-picture"></i>首图:</span><el-input   v-model="blog.firstPicture"></el-input></div>
            </el-form-item>
            <el-form-item prop="description">
                <div ><span class="in"><i class="el-icon-chat-dot-square"></i>摘要:</span><el-input   type="textarea" v-model="blog.description"></el-input>
                </div>
            </el-form-item>
            <el-form-item prop="content">
                <mavon-editor  v-model="blog.content">
                </mavon-editor>
            </el-form-item>
            <el-form-item prop="boolen">
                <div class="mycheckbox">
                    <el-checkbox v-model="blog.recommend">推荐</el-checkbox>
                    <el-checkbox v-model="blog.flag">转载声明</el-checkbox>
                    <el-checkbox v-model="blog.appreciation">赞赏</el-checkbox>
                    <el-checkbox v-model="blog.commentAbled" >评论</el-checkbox>
                    <el-checkbox v-model="blog.shareStatement" >分享</el-checkbox>
                </div>
            </el-form-item>
            <el-form-item prop="tagType">
                <div class="myselect">
                    <el-select multiple v-model="blog.tag" placeholder="标签">
                        <el-option
                                v-for="item in tags"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                    <el-select  v-model="blog.type" placeholder="类型">
                        <el-option
                                v-for="item in types"
                                :label="item.name"
                                :value="item.name">
                        </el-option>
                    </el-select>
                </div>
            </el-form-item>


            <el-form-item>
                <el-button type="primary" @click="submitForm('blog')">立即创建</el-button>
                <el-button @click="resetForm('blog')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "BlogEdit",
        data() {
            return {
                types:[
                    {
                        id:1,
                        name:'学习'
                    },
                    {
                        id:2,
                        name:'编程'
                    }
                ],

                tags:[
                    {
                        id:1,
                        name:'JavaScript'
                    },
                    {
                        id:2,
                        name:'Python'
                    },
                    {
                        id:3,
                        name:'SpringBoot'
                    },
                ],
                blog: {
                    title: '',
                    tag:'',
                    type:'',
                    description: '',
                    flag:'转载',
                    appreciation:false,
                    commentAbled:false,
                    content:'',
                    firstPicture:'',
                    published:false,
                    recommend:false,
                    shareStatement:false,
                },
                rules: {
                    title: [
                        { required: true, message: '请输入文章标题', trigger: 'blur' },
                        { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
                    ],
                    firstPicture: [
                        { required: true, message: '请输入首图地址', trigger: 'blur' }
                    ],
                    description: [
                        {  required: true, message: '请输入文章摘要', trigger: 'blur' }
                    ],
                    content:[
                        {  required: true, message: '请输入文章内容', trigger: 'blur' }
                    ]
                }
            };
        },
        created() {
            const blogId = this.$route.params.blogId
            console.log(blogId);
            if (blogId){
                this.$axios.get('/blog/'+blogId).then(res=>{
                    console.log(res.data.data);
                    this.blog=res.data.data;
                })
            }

        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                       this.$axios.post('/blog',this.blog,{
                           headers:{
                               "Authentication":localStorage.getItem('token')
                           }
                       }).then(res=>{
                          this.$router.push({name:"Blogs"})
                       })
                    } else {
                        console.log('error submit!!');
                        console.log(this.blog);

                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style >
    input.el-input__inner{
        padding-left: 60px;
    }
    textarea.el-textarea__inner{
        padding-left: 60px;
        padding-top: 10px;

    }
    .el-form-item__label{
        color: white;
    }
    span.in{
        color: #409EFF;
    }
    .myselect{
        margin-bottom: 20px;
        width: auto;
    }
    .editbox{
        width: 80%;
        height: 1000px;
        margin: 0 auto;
        line-height: 40px;
        text-align: left;

    }
    .in{
        text-align: left;
        position: relative;
        top: 40px;
        z-index: 2;

    }

</style>

```

#### 2.8 详情页面开发

##### 2.8.1截图

```html
<template>
<div class="detailbox">
    <div class="blogTitle">
        <h5>{{blog.title}}</h5>
    </div>
    <div class="blogImg" v-show="blog.firstPicture">
        <el-image :src="blog.firstPicture"
                  :fit="fit"
                   style="width: 100%">
            <div slot="error" class="image-slot">
            </div>
        </el-image>
    </div>
    <div class="markdown-body">
        <p class="content" v-html="blog.content"></p>
    </div>


</div>
</template>

<script>
    import 'github-markdown-css'
    export default {
        name: "BlogDetail",
        data(){
            return{
                blog:{},
            }
        },
        methods:{

        },

        created() {
            const blogId = this.$route.params.blogId
            console.log(blogId);
            if (blogId){
                this.$axios.get('/blog/'+blogId).then(res=>{
                    console.log(res.data.data);

                    var MarkDownIt = require('markdown-it')
                    var md = new MarkDownIt();
                    this.blog=res.data.data;
                    this.blog.content=md.render(res.data.data.content)
                })
            }

        },
    }
</script>

<style scoped>
    .blogTitle{
        text-align: center;
        font-size: large;
    }
    .blogImg{
        width: 100%;
    }
.detailbox{
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 255, .12), 0 0 6px rgba(0, 0, 255, .04);
    min-height: 800px;
    margin-bottom: 50px;
    padding: 15px 20px;
    line-height: 30px;
}

```

## 6.项目总结

